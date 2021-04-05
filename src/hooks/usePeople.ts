import React, {useState, useEffect} from 'react';
import Realm from 'realm';
import {PersonSchema} from 'database';
import {Person} from 'types';

export const usePeople = (): Person[] => {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    Realm.open({schema: [PersonSchema]}).then(realm => {
      const _people = realm.objects<Person>('Person');
      setPeople(Array.from(_people));
      realm.close();
    });
  });

  return people;
};
