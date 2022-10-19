const ResultsSchema = {
  name: 'Results',
  primaryKey: 'id',
  properties: {
    id: 'string',
    day: 'string',
    victory: 'int',
    loss: 'int',
    match: 'int',
  },
};

export default ResultsSchema;
