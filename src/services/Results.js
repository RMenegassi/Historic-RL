import {getRealm} from './Realm';

export const getResults = async day => {
  let realm = await getRealm();
  realm = realm.objects('Results');

  realm = realm.filtered('day == $0', day);

  return realm;
};

export const saveResults = async values => {
  const realm = await getRealm();
  let data = {};

  try {
    realm.write(() => {
      data = {
        id: values.day || '31/02/0000',
        day: values.day || '31/02/0000',
        victory: values.victory || 0,
        loss: values.loss || 0,
        match: values.match || 1,
      };
      realm.create('Results', data, true);
    });
  } catch (error) {
    console.error('saveEntry :: error on save object', JSON.stringify(data));
    console.log(error);
  }

  return data;
};
