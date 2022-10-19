import styled from 'styled-components';

export const Container = styled.View`
  border-width: 1px;
  border-color: white;
  align-items: center;
  margin-top: 10px;
  justify-content: center;
  width: 300px;
  align-self: center;
  border-radius: 30px;
  padding: 20px;
  background-color: #34495e;
`;

export const InsideContainer = styled.View`
  flex-direction: row;
`;

export const Text = styled.Text`
  font-weight: bold;
  color: white;
  font-size: 17px;
`;

export const ViewText = styled.View`
  flex: 1;
`;

export const ButtonSubtract = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #e5ff32;
  border-radius: 150px;
  height: 20px;
  width: 20px;
  border-width: 1px;
`;

export const ButtonSubtractIcon = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;
