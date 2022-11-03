import {useState, useEffect} from 'react';
import moment from 'moment';

import {getResults, saveResults, getExample} from '../services/Results';

const useValues = (day = moment().format('DD/MM/YYYY')) => {
  const [results, setResults] = useState({});

  const addVictory = () => {
    setResults({
      ...results,
      victory: results.victory + 1,
    });
  };

  const removeVictory = () => {
    setResults({
      ...results,
      victory: results.victory - 1,
    });
  };

  const addLoss = () => {
    setResults({
      ...results,
      loss: results.loss + 1,
    });
  };

  const removeLoss = () => {
    setResults({
      ...results,
      loss: results.loss - 1,
    });
  };

  const clearResults = () => {
    setResults({...results, victory: 0, loss: 0});
  };

  useEffect(() => {
    const loadDB = async () => {
      const data = await getResults(day);
      const data2 = await getExample(day);
      console.log(data2);
      const resultsDB =
        data.length > 0
          ? data[0]
          : {
              id: day,
              day: day,
              victory: 0,
              loss: 0,
              match: 1,
            };
      if (data.length === 0 && resultsDB) {
        saveResults(resultsDB);
      }
      setResults(resultsDB);
    };
    loadDB();
  }, [day]);

  saveResults(results);
  return [
    results,
    addVictory,
    addLoss,
    removeVictory,
    removeLoss,
    clearResults,
  ];
};

export default useValues;
