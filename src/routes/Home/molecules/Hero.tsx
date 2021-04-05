import {Line} from 'components';
import {isSameDay} from 'date-fns';
import {daysUntilBirthday} from 'helpers/general';
import React from 'react';
import {Text} from 'react-native';
import {Person} from 'types';
import * as styles from '../styles';

interface HeroProps {
  person: Person;
}

export const Hero: React.FC<HeroProps> = ({person}) => {
  return (
    <styles.HeroContainter>
      <styles.HeroImage />
      <Text>
        {person.firstname}'s birthday is{' '}
        {isSameDay(person.birthdate, new Date())
          ? 'today'
          : daysUntilBirthday(person)}
        !
      </Text>
      <Line />
    </styles.HeroContainter>
  );
};
