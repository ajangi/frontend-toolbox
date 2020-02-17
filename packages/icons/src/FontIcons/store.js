import React from 'react';
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
    <title>store</title>
    <path d="M28.506 30.738h-25.101c-0.566 0-1.024-0.458-1.024-1.024v0-16.39c0-0.566 0.458-1.024 1.024-1.024s1.024 0.458 1.024 1.024v0 15.366h23.053v-15.366c0-0.566 0.458-1.024 1.024-1.024s1.024 0.458 1.024 1.024v0 16.39c0 0.566-0.458 1.024-1.024 1.024v0zM19.795 29.77c-0.566 0-1.024-0.458-1.024-1.024v0-8.384h-5.824v8.384c0 0.566-0.458 1.024-1.024 1.024s-1.024-0.458-1.024-1.024v0-9.408c0-0.566 0.458-1.024 1.024-1.024v0h7.872c0.566 0 1.024 0.458 1.024 1.024v0 9.408c0 0.566-0.458 1.024-1.024 1.024v0zM25.302 15.15c-1.922-0.002-3.616-0.977-4.616-2.458l-0.013-0.020c-1.013 1.499-2.707 2.472-4.628 2.472-1.985 0-3.727-1.038-4.713-2.601l-0.014-0.023c-1 1.585-2.742 2.622-4.726 2.622-3.073 0-5.565-2.49-5.569-5.562v-7.148c0-0.566 0.458-1.024 1.024-1.024v0h27.802c0.566 0 1.024 0.458 1.024 1.024v0 7.148c-0.004 3.076-2.496 5.568-5.572 5.571h-0zM20.593 8.556h0.161c0.566 0 1.024 0.458 1.024 1.024v0c0.074 1.887 1.622 3.388 3.52 3.388s3.446-1.501 3.52-3.382l0-0.007v-6.124h-25.746v6.124c0.074 1.887 1.622 3.388 3.52 3.388s3.446-1.501 3.52-3.382l0-0.007c0-0.566 0.458-1.024 1.024-1.024v0h0.358c0.566 0 1.024 0.458 1.024 1.024v0c0.074 1.887 1.622 3.388 3.52 3.388s3.446-1.501 3.52-3.382l0-0.007c0 0 0-0 0-0 0-0.566 0.458-1.024 1.024-1.024 0.004 0 0.007 0 0.011 0h-0.001z" />
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
