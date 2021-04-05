import {differenceInCalendarDays} from 'date-fns';
import {Person} from 'types';

export const formatName = (person: Person): string => {
  return `${person.firstname} ${person.lastname}`;
};

export const daysUntilBirthday = (person: Person): number => {
  return differenceInCalendarDays(person.birthdate, new Date());
};
