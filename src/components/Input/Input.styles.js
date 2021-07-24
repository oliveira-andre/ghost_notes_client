import styled from 'styled-components';

import { rem } from '../utils/convert-pixel';

const CustomInput = styled.input`
  width: 100%;
  height: ${props => props.height};
  font-size: ${rem(20)};
  background: transparent;
  color: cyan;
  border: ${rem(1)} solid #26dafd;
  outline: none;
  padding: ${rem(20)} ${rem(10)} ${rem(20)} ${rem(10)};
  margin-bottom: ${rem(20)};
`;

export { CustomInput };
