import {css} from '@emotion/native';
import {StyledText, Line, PersonRow} from 'components';
import Colors from 'helpers/colourPalette';
import React from 'react';
import {ScrollView} from 'react-native';
import {Person} from 'types';
import * as styles from '../styles';

interface UpcomingBirthdaysProps {
  people: Person[];
}

const UpcomingBirthdays: React.FC<UpcomingBirthdaysProps> = ({people}) => {
  return (
    <styles.UpcomingBirthdaysContainer>
      <StyledText
        type="Regular"
        style={css`
          font-size: 18px;
        `}>
        Upcoming Birthdays
      </StyledText>
      <Line color={Colors.paradisePink} numDashes={20} gap={1.5} />
      <ScrollView>
        {people.map(person => (
          <PersonRow
            key={person.id}
            person={person}
            color={Colors.paradisePink}
          />
        ))}
      </ScrollView>
    </styles.UpcomingBirthdaysContainer>
  );
};

export default UpcomingBirthdays;
