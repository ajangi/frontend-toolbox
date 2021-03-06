/**
 * @name arrayItemAddProp
 * @description adds similar properties to children of an array
 * @param baseArray
 * @param props
 * @returns {[]}
 */
export const arrayItemAddProp = (baseArray, props) => {
  const newArray = [];
  baseArray.forEach((item) => newArray.push({ ...item, ...props }));
  return newArray;
};

/**
 * @name flattenArray
 * @description makes a flat array from sub-arrays of an array
 * @param array
 * @param property
 * @returns {[]}
 */
export const flattenArray = (array, property) => {
  const result = [];
  array.forEach((item) => {
    result.push(...item[property]);
  });
  return result;
};

/**
 * @name serializeObject
 * @description serializes the properties of given object
 * @param object
 * @returns {string}
 */
export const serializeObject = (object) => {
  const result = [];
  Object.keys(object).forEach((property) => {
    if (typeof object[property] === 'object') {
      if (Array.isArray(object[property]) && object[property].length) {
        object[property].forEach((item) => result.push(`${property}[]=${item}`));
      } else if (
        !Array.isArray(object[property])
        && Object.keys(object[property]).length
      ) {
        Object.keys(object[property]).forEach((key) => result.push(`${property}[${key}]=${object[property][key]}`));
      }
    } else if (typeof object[property] !== 'undefined') {
      result.push(`${property}=${object[property]}`);
    }
  });
  return result.join('&');
};

/**
 * @name stringifyArray
 * @description Create string from array
 * @param array
 * @param properties
 * @returns {string}
 */
export const stringifyArray = (array, properties) => {
  const newArray = [];
  array.forEach((item) => {
    const filteredProperties = {};
    properties.forEach((property) => {
      filteredProperties[property] = item[property];
    });
    newArray.push(filteredProperties);
  });
  return JSON.stringify(newArray);
};

/**
 * @name deepFlatten
 * @description Deep flatten an array
 * @param array
 * @param property
 * @param flattenArrayTemp
 * @returns {Array}
 */
export const deepFlatten = (array, property, flattenArrayTemp = []) => {
  const newArray = { ...array };
  delete newArray[property];
  flattenArrayTemp.push(newArray);
  if (
    array[property]
    && Array.isArray(array[property])
    && array[property].length
  ) {
    array[property].forEach((item) => deepFlatten(item, property, flattenArrayTemp));
  }
  return flattenArrayTemp;
};
