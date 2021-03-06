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
    <title>cross</title>
    <path d="M29.098 30.038c-0 0-0.001 0-0.001 0-0.282 0-0.537-0.114-0.722-0.298l0 0-26.207-26.102c-0.186-0.186-0.302-0.442-0.302-0.726 0-0.566 0.459-1.024 1.024-1.024 0.282 0 0.537 0.114 0.723 0.298l26.211 26.102c0.186 0.185 0.302 0.442 0.302 0.726 0 0.566-0.458 1.024-1.024 1.024-0 0-0.001 0-0.001 0h0zM2.89 30.038c-0.565-0-1.024-0.459-1.024-1.024 0-0.284 0.115-0.54 0.302-0.726l0-0 26.208-26.102c0.185-0.185 0.441-0.299 0.724-0.299 0.566 0 1.025 0.459 1.025 1.025 0 0.284-0.115 0.54-0.301 0.726l-0 0-26.211 26.102c-0.185 0.184-0.44 0.298-0.722 0.298-0 0-0.001 0-0.001 0h0z" />
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
