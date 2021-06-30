import {css} from '@emotion/native';
import {Line, StyledText} from 'components';
import {isSameDay} from 'date-fns';
import {daysUntilBirthday} from 'helpers/general';
import React from 'react';
import {Person} from 'types';
import * as styles from '../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from 'helpers/colourPalette';

interface HeroProps {
  person: Person;
}

export const Hero: React.FC<HeroProps> = ({person}) => {
  return (
    <styles.HeroContainter>
      <styles.HeroImage>
        <Icon name="account-circle" size={170} color={Colors.paradisePink} />
      </styles.HeroImage>
      <StyledText
        type="Title"
        style={css`
          font-size: 24px;
        `}>
        {person.firstname}'s birthday is{' '}
        {isSameDay(person.birthdate, new Date())
          ? 'today'
          : `in ${daysUntilBirthday(person)} days!`}
        !
      </StyledText>
      <Line color={Colors.paradisePink} numDashes={20} gap={1.5} />
    </styles.HeroContainter>
  );
};
