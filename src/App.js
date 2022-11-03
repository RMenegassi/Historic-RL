import React, {useState} from 'react';
import {Container, BoxItems, BoxMatch} from './styles';

import useValues from './hooks/useValues';
import moment from 'moment';

import TitleDay from './components/TitleDay/index';
import Report from './components/Report';
import ButtonBox from './components/ButtonBox';
import ClearBox from './components/ClearBox';

const App = () => {
  const [day, setDay] = useState(moment());
  const [
    results,
    addVictory,
    addLoss,
    removeVictory,
    removeLoss,
    clearResults,
  ] = useValues(moment(day).format('DD/MM/YYYY'));

  const changeBackDay = () => {
    const daySelected = moment(day).subtract(1, 'days').toDate();
    setDay(daySelected);
  };

  const changeNextDay = () => {
    const daySelected = moment(day).subtract(-1, 'days').toDate();
    setDay(daySelected);
  };

  return (
    <Container>
      <BoxItems>
        <TitleDay
          day={moment(day).format('DD/MM/YYYY')}
          changeBackDay={changeBackDay}
          changeNextDay={changeNextDay}
        />
        <BoxMatch>Partida {results.victory + results.loss || 1}</BoxMatch>

        <ButtonBox title="Vitória" color="#0A2ACC" callback={addVictory} />
        <ButtonBox title="Derrota" color="#FC540C" callback={addLoss} />
        <Report
          onPressSubstractLoss={removeLoss}
          onPressSubstractVictory={removeVictory}
          results={
            {
              victory: results.victory,
              loss: results.loss,
            } || {
              victory: 0,
              loss: 0,
            }
          }
        />
      </BoxItems>

      <ClearBox callback={clearResults} />
    </Container>
  );
};

export default App;
