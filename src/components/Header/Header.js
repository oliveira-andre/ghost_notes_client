import React from 'react';
import { Row } from 'arwes';

import { HeaderCenter } from './Header.styles';

const Header = () => {
  return(
    <HeaderCenter animate>
      <Row col s={6} m={4} offset={['s3', 'm4']}>
        <h1>Ghost Notes | API</h1>
      </Row>
    </HeaderCenter>
  );
}

export default Header;
