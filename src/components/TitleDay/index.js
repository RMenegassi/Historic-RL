import {SafeAreaView} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

import {Container, Title, BeforeButton, NextButton} from './styles';

const TitleDay = ({day, changeBackDay, changeNextDay}) => {
  return (
    <SafeAreaView>
      <Container>
        <BeforeButton onPress={changeBackDay}>
          <Icon name="caret-back-outline" size={30} color="#fff" />
        </BeforeButton>

        <Title>{day}</Title>

        {day !== moment().format('DD/MM/YYYY') && (
          <NextButton onPress={changeNextDay}>
            <Icon name="caret-forward-outline" size={30} color="#fff" />
          </NextButton>
        )}
      </Container>
    </SafeAreaView>
  );
};

export default TitleDay;
