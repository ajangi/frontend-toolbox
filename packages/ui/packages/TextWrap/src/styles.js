// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
const StyledTextWrap = Styled.span`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  height: calc(${(props) => props.theme.defaultRem} * ${(props) => props.lineHeight * props.lines});
`;

export { StyledTextWrap };
