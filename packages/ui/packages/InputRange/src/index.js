import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import ReactInputRange from 'react-hgs-input-range';

import { currencyPrice } from '@snappmarket/helpers';
import {
  StyledInputRangeWrapper,
  StyledRangeLabelWrapper,
  StyledInputRange,
} from './styles';

const InputRange = (props) => {
  const {
    value: initialValue, rangeValue, onChangeComplete, fromTitle, toTitle,
  } = props;
  const { min: initialMin, max: initialMax } = rangeValue;
  const [value, setValue] = useState(initialValue);
  const { min, max } = value;

  return (
    <StyledInputRangeWrapper>
      <StyledInputRange>
        <ReactInputRange
          minValue={initialMin}
          value={value}
          maxValue={initialMax}
          onChange={setValue}
          onChangeComplete={onChangeComplete}
          formatLabel={() => false}
          rtl
        />
      </StyledInputRange>
      <StyledRangeLabelWrapper className="justify-between">
        <span className="text-center">
          {fromTitle}
          {' '}
          {currencyPrice(min)}
        </span>
        <span className="text-center">
          {toTitle}
          {' '}
          {currencyPrice(max)}
        </span>
      </StyledRangeLabelWrapper>
    </StyledInputRangeWrapper>
  );
};

InputRange.propTypes = {
  fromTitle: PropTypes.string,
  toTitle: PropTypes.string,
  onChangeComplete: PropTypes.func,
  rangeValue: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }),
  value: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }),
};
InputRange.defaultProps = {
  fromTitle: 'from',
  toTitle: 'to',
  onChangeComplete: () => {},
  rangeValue: {
    min: 0,
    max: 0,
  },
  value: {
    min: 0,
    max: 0,
  },
};
export default InputRange;
