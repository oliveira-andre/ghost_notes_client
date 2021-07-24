import React from 'react';
import PropTypes from 'prop-types'

import { CustomInput } from './Input.styles';

const Input = (props) => {
  const {
    height,
    onChange,
  } = props;

  return(
    <CustomInput
      height={height}
      onChange={onChange}
    />
  );
}

Input.propTypes = {
  height: PropTypes.number.isRequired,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  height: 30,
};

export default Input;
