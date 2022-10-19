import styled from 'styled-components';

export const BoxButton = styled.TouchableOpacity`
  border-width: 1px;
  align-self: center;
  justify-content: center;
  width: 300px;
  height: 70px;
  margin: 25px 0;
  border-radius: 20px;
  background-color: #34495e;
  border-color: ${props => props.color || '#fff'};
`;

export const BoxButtonText = styled.Text`
  font-size: 45px;
  text-align: center;
  color: white;
`;
