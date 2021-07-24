import styled from 'styled-components';

import { rem } from '../utils/convert-pixel';

const CustomTextArea = styled.textarea`
  width: 100%;
  height: ${props => rem(props.height)};
  min-height: ${props => rem(props.minHeight)};
  max-height: ${props => rem(props.maxHeight)};
  font-size: ${rem(20)};
  background: transparent;
  color: cyan;
  border: ${rem(1)} solid #26dafd;
  outline: none;
  padding: ${rem(20)} ${rem(10)} ${rem(20)} ${rem(10)};
  margin-bottom: ${rem(20)};
`;

export { CustomTextArea };
