import {differenceInCalendarDays} from 'date-fns';
import {Person} from 'types';

export const formatName = (person: Person): string => {
  return `${person.firstname} ${person.lastname}`;
};

export const daysUntilBirthday = (person: Person): number => {
  return differenceInCalendarDays(person.birthdate, new Date());
};

export const daysUntilBirthdayString = (person: Person): string => {
  const difference = daysUntilBirthday(person);
  if (difference > 0) {
    return `${difference} Day${difference !== 1 ? 's' : ''}`;
  } else if (difference < 0) {
    return `${difference * -1} Day${difference * -1 !== 1 ? 's' : ''} ago`;
  } else {
    return 'Today';
  }
};
