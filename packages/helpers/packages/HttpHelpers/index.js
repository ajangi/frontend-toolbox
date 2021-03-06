// eslint-disable-next-line import/no-named-default
import AbortController from 'abort-controller';
import fetch from 'isomorphic-unfetch';

import { ApiError, delog } from '../DebugHelpers';
import { serializeObject } from '../ArrayHelpers';
import { emptyPromise, makeTimeout } from '../PromiseHelpers';

/**
 * @name fetchWithTimeOut
 * @description fetches the request, if it takes to long, it will be timed out
 * @param url
 * @param options
 * @param timeout
 * @returns {Promise<unknown>}
 */
export const fetchWithTimeOut = (url, options, timeout = 5000) => {
  const controller = new AbortController();
  const { signal } = controller;
  const request = fetch(url, { ...options, signal });
  const challenger = makeTimeout(timeout);
  const race = Promise.race([request, challenger]);
  race.catch(e => {
    if (e.message === 'TIMEOUT') {
      controller.abort();
    }
  });
  return race;
};

/**
 * @name universalCall
 * @description Call an api in universal way
 * @param url
 * @param method
 * @param credentials
 * @param data
 * @param headers
 * @param params
 * @param jwtToken
 * @param rest
 * @param timeout
 * @param allowedNoContent
 * @returns {Promise<any>}
 */
export const universalCall = async ({
  url,
  method = 'GET',
  credentials = 'same-origin',
  data = {},
  headers = {},
  params = {},
  jwtToken = '',
  allowedNoContent = false,
  timeout = 5000,
  ...rest
  // eslint-disable-next-line consistent-return
}) => {
  const options = {
    method: method.toUpperCase(),
    credentials,
    headers,
    ...rest,
  };

  delog(`API called with : ${options.method} ${url}`);

  if (jwtToken) {
    // eslint-disable-next-line no-param-reassign
    headers.authorization = `Bearer ${jwtToken}`;
  }

  /**
   * Make body of POST and PUT requests
   */
  if (!['GET', 'HEAD'].includes(options.method)) {
    options.body = JSON.stringify(data);
    delete options.data;
  }

  /**
   * Make query parameters
   */
  let callUrl = url;
  if (Object.keys(params).length > 0) {
    const queryParameters = serializeObject(params);
    callUrl += `?${queryParameters}`;
  }

  /**
   * Call universal request with options
   */
  const response = await fetchWithTimeOut(encodeURI(callUrl), options, timeout);
  const contentType = response.headers.get('content-type');

  /**
   * Handle custom response types
   */
  if (allowedNoContent && response.status === 204) {
    return emptyPromise();
  }

  /**
   * If we did not got json then throw error message
   */
  if (!contentType || !contentType.includes('application/json')) {
    throw new ApiError(`SERVER_CONTENT_TYPE_ERROR:${url}`);
  }

  /**
   * Parse server response json string
   */
  let result = {};
  try {
    result = await response.json();
  } catch (e) {
    throw new ApiError(`SERVER_CONTENT_PARSING_ERROR:${url}`);
  }

  /**
   * If result is not ok throw error
   */
  if (!response.ok) {
    throw result;
  }
  return result;
};
