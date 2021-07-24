import React from 'react';
import PropTypes from 'prop-types';

import { CustomTextArea } from './TextArea.styles';

const TextArea = (props) => {
  const {
    height,
    minHeight,
    maxHeight,
    onChange,
  } = props;

  return(
    <CustomTextArea
      height={height}
      minHeight={minHeight}
      maxHeight={maxHeight}
      onChange={onChange}
    />
  );
}

TextArea.propTypes = {
  height: PropTypes.number.isRequired,
  minHeight: PropTypes.number.isRequired,
  maxHeight: PropTypes.number.isRequired,
  onChange: PropTypes.func,
};

TextArea.defaultProps = {
  height: 500,
  minHeight: 500,
  maxHeight: 500,
};

export default TextArea;
