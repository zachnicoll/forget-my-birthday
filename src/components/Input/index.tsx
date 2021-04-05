import {css} from '@emotion/native';
import {StyledText} from 'components/StyledText';
import React from 'react';
import {TextInputProps} from 'react-native';
import * as styles from './styles';

interface InputProps extends TextInputProps {
  label: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  ...textInputProps
}) => {
  return (
    <>
      <StyledText
        type="Regular"
        style={css`
          font-size: 32px;
        `}>
        {label}
      </StyledText>
      <styles.Input {...textInputProps} />
      {error && (
        <StyledText
          type="Bold"
          style={css`
            color: red;
          `}>
          {error}
        </StyledText>
      )}
    </>
  );
};
