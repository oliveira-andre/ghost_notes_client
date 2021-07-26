import React from 'react';
import PropTypes from 'prop-types'

import { CustomInput } from './Input.styles';

const Input = (props) => {
  const {
    height,
    onChange,
    disabled,
  } = props;

  return(
    <CustomInput
      height={height}
      onChange={onChange}
      disabled={disabled}
    />
  );
}

Input.propTypes = {
  height: PropTypes.number.isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  height: 30,
};

export default Input;
