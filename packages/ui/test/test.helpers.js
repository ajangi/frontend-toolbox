import React from 'react';
import { ThemeProvider } from 'styled-components';
import { makeTheme } from '../packages/Theme/src';

const theme = makeTheme();

// eslint-disable-next-line react/prop-types
const Wrapper = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export { theme, Wrapper };
