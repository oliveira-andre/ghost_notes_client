import React from 'react';
import { Row } from 'arwes';

import { HeadingCenter } from './Header.styles';

const Header = () => {
  return(
    <Row col s={6} m={4} offset={['s3', 'm4']}>
      <HeadingCenter node='h1'>Ghost Notes | API</HeadingCenter>
    </Row>
  );
}

export default Header;
