import * as React from 'react';
import PropTypes from 'prop-types';

const IconName = ({ className, size, color }) => (
  <svg
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill={color}
  >
    <title>ring</title>
    <path d="M16.004 32c-8.838 0-16.002-7.164-16.002-16.002s7.164-16.002 16.002-16.002c8.838 0 16.002 7.164 16.002 16.002v0c-0.011 8.833-7.169 15.991-16.001 16.002h-0.001zM16.004 1.996c-7.733 0-14.002 6.269-14.002 14.002s6.269 14.002 14.002 14.002c7.733 0 14.002-6.269 14.002-14.002v0c-0.007-7.73-6.272-13.995-14.001-14.002h-0.001z" />
    {' '}
  </svg>
);

IconName.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

IconName.defaultProps = {
  size: 1.5,
  color: '#000000',
};

export default IconName;
