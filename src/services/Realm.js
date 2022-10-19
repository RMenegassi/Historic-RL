import Realm from 'realm';

import ResultsSchema from '../schemas/ResultsSchema';

export const getRealm = async () => {
  const realm = await Realm.open({
    schema: [ResultsSchema],
    schemaVersion: 1,
  });

  //dropDB(realm);
  return realm;
};

export const dropDB = realm => {
  realm.write(() => {
    realm.deleteAll();
  });
};
