import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {CustomTabNavOptions} from 'routes/routeConfig';
import * as styles from './styles';

interface CustomTabBarProps extends BottomTabBarProps {}

const CustomTabBar: React.FC<CustomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const focusedOptions = descriptors[state.routes[state.index].key]
    .options as CustomTabNavOptions;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <styles.TabBarContainer primaryColor={focusedOptions.color}>
      {state.routes.map((route, index) => {
        const options = descriptors[route.key].options as CustomTabNavOptions;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <styles.TabContainer
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={index}
            primaryColor={isFocused ? options.color : 'white'}>
            {options?.tabBarIcon &&
              options?.tabBarIcon({
                focused: isFocused,
                color: isFocused ? 'white' : options.color,
                size: 32,
              })}
          </styles.TabContainer>
        );
      })}
    </styles.TabBarContainer>
  );
};

export default CustomTabBar;
