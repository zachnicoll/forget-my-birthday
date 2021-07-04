import {css} from '@emotion/native';
import {StyledText} from 'components/StyledText';
import React from 'react';
import {TextInputProps, View} from 'react-native';
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
    <View>
      <StyledText type="Title" fontSize={18}>
        {label}
      </StyledText>
      <styles.Input {...textInputProps} />
      {error && (
        <StyledText
          type="Medium"
          style={css`
            color: red;
          `}>
          {error}
        </StyledText>
      )}
    </View>
  );
};
