import React from 'react';
import {TextProps, Text} from 'react-native';

type FontWeight =
  | 'Thin'
  | 'Light'
  | 'SemiBold'
  | 'Regular'
  | 'Black'
  | 'Bold'
  | 'ExtraBold'
  | 'ExtraLight'
  | 'Medium';

interface StyledTextProps extends TextProps {
  type: FontWeight;
}

export const StyledText: React.FC<StyledTextProps> = ({
  type,
  children,
  style,
  ...textProps
}) => {
  return (
    <Text style={[{fontFamily: `Catamaran-${type}`}, style]} {...textProps}>
      {children}
    </Text>
  );
};
