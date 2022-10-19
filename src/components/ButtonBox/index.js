import React from 'react';

import {BoxButton, BoxButtonText} from './styles';

const ButtonBox = ({title, color, callback}) => {
  return (
    <BoxButton color={color} onPress={callback}>
      <BoxButtonText>{title}</BoxButtonText>
    </BoxButton>
  );
};

export default ButtonBox;
