import * as React from 'react';
import PropTypes from 'prop-types';

const DissatisfiedEmoji = ({ className, size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="45.181"
    height="45.181"
    viewBox="0 0 45.181 45.181"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill={color}
  >
    <g transform="translate(44)">
      <path
        d="M38.564 6.617a22.59 22.59 0 1 0 0 31.947 22.59 22.59 0 0 0 0-31.947zm-.941 31.011A21.273 21.273 0 0 1 7.551 7.553a21.273 21.273 0 0 1 30.077 30.075zm0 0"
        transform="translate(-43.999)"
        strokeWidth={0}
      />
      <path
        d="M.559 3.906a.753.753 0 0 0 .926-.531 3.726 3.726 0 0 1 6.455 0A.756.756 0 1 0 9.4 2.98a5.175 5.175 0 0 0-9.373 0 .753.753 0 0 0 .533.926zm0 0"
        strokeWidth={0}
        transform="rotate(180 -3.93 8.958)"
      />
      <path
        d="M.559 3.906a.753.753 0 0 0 .926-.531 3.725 3.725 0 0 1 6.455 0A.756.756 0 1 0 9.4 2.98a5.175 5.175 0 0 0-9.373 0 .753.753 0 0 0 .533.926zm0 0"
        strokeWidth={0}
        transform="rotate(180 -12.8 8.958)"
      />
      <path
        d="M-34.846 18.542s6.327-4.552 11.495-3.837"
        className="no-fill"
        strokeLinecap="round"
        strokeWidth="1.2"
        transform="translate(8.078 12.911)"
      />
    </g>
  </svg>
);

DissatisfiedEmoji.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

DissatisfiedEmoji.defaultProps = {
  size: 1.5,
  color: '#000000',
};

export default DissatisfiedEmoji;
