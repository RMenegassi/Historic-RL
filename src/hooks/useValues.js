import {useState, useEffect} from 'react';
import moment from 'moment';

import {getResults, saveResults} from '../services/Results';

const useValues = (day = moment().format('DD/MM/YYYY')) => {
  const [results, setResults] = useState({});

  const addVictory = () => {
    setResults({
      id: results.day,
      day: results.day,
      victory: results.victory + 1,
      loss: results.loss,
      match: results.match + 1,
    });
  };

  const removeVictory = () => {
    setResults({
      id: results.day,
      day: results.day,
      victory: results.victory - 1,
      loss: results.loss,
      match: results.match - 1,
    });
  };

  const addLoss = () => {
    setResults({
      id: results.day,
      day: results.day,
      victory: results.victory,
      loss: results.loss + 1,
      match: results.match + 1,
    });
  };

  const removeLoss = () => {
    setResults({
      id: results.day,
      day: results.day,
      victory: results.victory,
      loss: results.loss - 1,
      match: results.match - 1,
    });
  };

  const clearResults = () => {
    setResults({
      id: results.day,
      day: results.day,
      victory: 0,
      loss: 0,
      match: 1,
    });
  };

  useEffect(() => {
    const loadDB = async () => {
      const data = await getResults(day);
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
