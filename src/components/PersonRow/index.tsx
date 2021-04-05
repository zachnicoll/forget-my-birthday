import {daysUntilBirthday, formatName} from 'helpers/general';
import React from 'react';
import {Text} from 'react-native';
import {Person} from 'types';
import * as styles from './styles';

interface PersonRowProps {
  person: Person;
}

export const PersonRow: React.FC<PersonRowProps> = ({person}) => {
  const daysToBirthday = daysUntilBirthday(person);

  return (
    <styles.Wrapper>
      <styles.ImageContainer />
      <styles.InfoContainer>
        <Text>{formatName(person)}</Text>
        <Text>
          {daysToBirthday} Day{daysToBirthday !== 1 ? 's' : ''}
        </Text>
      </styles.InfoContainer>
    </styles.Wrapper>
  );
};
