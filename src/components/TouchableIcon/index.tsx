import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import * as styles from './styles';
import FontAwesome5, {
  FontAwesome5IconProps,
} from 'react-native-vector-icons/FontAwesome5';
import {css} from '@emotion/native';

interface TouchableIconProps extends TouchableOpacityProps {
  name: string;
  size?: number;
  color?: string;
  backgroundColor?: string;
  iconProps?: Partial<FontAwesome5IconProps>;
}

export const TouchableIcon: React.FC<TouchableIconProps> = ({
  name,
  size,
  color,
  backgroundColor,
  iconProps,
  ...touchableOpacityProps
}) => {
  return (
    <styles.Container
      style={css`
        background-color: ${backgroundColor};
      `}
      {...touchableOpacityProps}>
      <FontAwesome5
        name={name}
        size={size ?? 16}
        color={color ?? 'white'}
        {...iconProps}
      />
    </styles.Container>
  );
};
