import React, {useState, useEffect} from 'react';
import Realm from 'realm';
import {PersonSchema} from 'database';
import {Person} from 'types';

export const usePeople = (): Person[] => {
  const [people, setPeople] = useState<Person[]>([]);

  const getPeople = async (): Promise<Person[]> => {
    let _people: Person[] = [];
    try {
      await Realm.open({schema: [PersonSchema]}).then(realm => {
        _people = Array.from(realm.objects<Person>('Person'));
      });
    } catch (e) {
      console.error('Failed to get Person objects from Realm: ', e);
    }

    return _people;
  };

  useEffect(() => {
    getPeople().then(setPeople);
  }, []);

  return people;
};
