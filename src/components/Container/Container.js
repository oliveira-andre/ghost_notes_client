import React from 'react';
import PropTypes from 'prop-types';

import { DivContainer } from './Container.styles';

const Container = (props) => {
  const { children } = props;

  return(
    <DivContainer>
      { children }
    </DivContainer>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
