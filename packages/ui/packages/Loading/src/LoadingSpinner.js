import * as React from 'react';
import PropTypes from 'prop-types';
import { StyledLoading } from './styles';

const LoadingSpinner = ({ direction }) => (
  <StyledLoading data-testid="loadingSpinner" direction={direction} className="loader" />
);

LoadingSpinner.propTypes = {
  direction: PropTypes.string,
};

export default LoadingSpinner;
