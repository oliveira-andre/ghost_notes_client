import styled from 'styled-components'; 
import { Button } from 'arwes'; 

import { rem } from '../../components/utils/convert-pixel';

const SubmitButton = styled(Button)`
  margin-top: ${rem(20)};
`;

export { SubmitButton };
