import {css} from '@emotion/native';
import {StyledText} from 'components/StyledText';
import {format} from 'date-fns/esm';
import {
  daysUntilBirthday,
  daysUntilBirthdayString,
  formatName,
} from 'helpers/general';
import React from 'react';
import {Person} from 'types';
import * as styles from './styles';

interface PersonRowProps {
  person: Person;
  color: string;
}

export const PersonRow: React.FC<PersonRowProps> = ({person, color}) => {
  return (
    <styles.Wrapper>
      <styles.ImageContainer color={color}>
        <StyledText
          fontSize={16}
          type="Title"
          style={css`
            text-align: center;
          `}>
          {format(person.birthdate, 'dd')}
        </StyledText>
        <StyledText
          fontSize={16}
          type="Title"
          style={css`
            text-align: center;
          `}>
          {format(person.birthdate, 'MM')}
        </StyledText>
      </styles.ImageContainer>
      <styles.InfoContainer>
        <StyledText fontSize={18}>{formatName(person)}</StyledText>
        <StyledText fontSize={14}>{daysUntilBirthdayString(person)}</StyledText>
      </styles.InfoContainer>
    </styles.Wrapper>
  );
};
