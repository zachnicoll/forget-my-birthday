import Realm from 'realm';
import {PersonSchema} from 'database';
import {Person} from 'types';

const RealmOpen = async (): Promise<Realm> => {
  return await Realm.open({schema: [PersonSchema]});
};

export const RealmCreatePerson = async (person: Person) => {
  return await RealmOpen().then(realm => {
    realm.write(() => {
      realm.create<Person>('Person', person);
    });
    realm.close();
  });
};
