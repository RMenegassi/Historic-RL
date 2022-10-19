import React from 'react';

import {ClearButton, ClearButtonText} from './styles';

const ClearBox = ({callback}) => {
  return (
    <ClearButton onPress={callback}>
      <ClearButtonText>Clear</ClearButtonText>
    </ClearButton>
  );
};

export default ClearBox;
