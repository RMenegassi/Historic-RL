import React from 'react';

import {
  Container,
  InsideContainer,
  Text,
  ViewText,
  ButtonSubtract,
  ButtonSubtractIcon,
} from './styles';

export default function Report({
  onPressSubstractVictory,
  onPressSubstractLoss,
  results,
}) {
  const isWin = () => {
    if (results.victory - results.loss > 0) {
      return 'win';
    } else if (results.victory === results.loss) {
      return 'draw';
    } else {
      return 'loss';
    }
  };

  return (
    <Container
      style={[
        isWin() === 'win'
          ? {borderColor: '#0CFC20'}
          : isWin() === 'draw'
          ? {borderColor: '#999999'}
          : {borderColor: '#FC0C0C'},
      ]}>
      <InsideContainer>
        <ViewText>
          <Text>Vitórias: {results.victory}</Text>
        </ViewText>
        <ButtonSubtract onPress={onPressSubstractVictory}>
          <ButtonSubtractIcon>-</ButtonSubtractIcon>
        </ButtonSubtract>
      </InsideContainer>
      <InsideContainer>
        <ViewText>
          <Text>Derrotas: {results.loss}</Text>
        </ViewText>
        <ButtonSubtract onPress={onPressSubstractLoss}>
          <ButtonSubtractIcon>-</ButtonSubtractIcon>
        </ButtonSubtract>
      </InsideContainer>

      <Text>Total: {results.victory - results.loss}</Text>
    </Container>
  );
}
