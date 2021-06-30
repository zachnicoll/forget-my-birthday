import {css} from '@emotion/native';
import {FlexRow, StyledText} from 'components';
import {daysUntilBirthdayString} from 'helpers/general';
import React from 'react';
import {Person} from 'types';
import * as styles from '../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from 'helpers/colourPalette';
import {isSameDay} from 'date-fns';

interface HeroProps {
  person: Person;
}

export const Hero: React.FC<HeroProps> = ({person}) => {
  return (
    <>
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
          {isSameDay(person.birthdate, new Date()) ? '' : 'in '}
          {daysUntilBirthdayString(person).toLocaleLowerCase()}!
        </StyledText>
      </styles.HeroContainter>
      <FlexRow
        style={css`
          justify-content: center;
        `}>
        <StyledText
          type="Regular"
          style={css`
            font-size: 18px;
          `}>
          Say something nice on
        </StyledText>
        <Icon
          name="facebook"
          size={24}
          color="black"
          style={css`
            margin-left: 4px;
          `}
        />
        <Icon
          name="phone"
          size={24}
          color="black"
          style={css`
            margin-left: 4px;
          `}
        />
      </FlexRow>
    </>
  );
};
