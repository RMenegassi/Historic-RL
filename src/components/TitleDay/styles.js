import styled from 'styled-components';

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 15px;
  color: #ecf0f1;
`;

export const BeforeButton = styled.TouchableOpacity`
  position: absolute;
  z-index: 1;
  left: 120px;
`;

export const NextButton = styled.TouchableOpacity`
  position: absolute;
  z-index: 1;
  right: 120px;
`;
