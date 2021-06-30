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
  type?: FontWeight | 'Title';
  fontSize?: number;
}

export const StyledText: React.FC<StyledTextProps> = ({
  type = 'Regular',
  children,
  fontSize,
  style,
  ...textProps
}) => {
  return (
    <Text
      style={[
        {
          fontFamily:
            type === 'Title' ? 'FredokaOne-Regular' : `Catamaran-${type}`,
          fontSize: fontSize,
        },
        style,
      ]}
      {...textProps}>
      {children}
    </Text>
  );
};
