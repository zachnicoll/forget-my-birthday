import {RouteProp} from '@react-navigation/core';
import {
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';
import React from 'react';
import Home from 'routes/Home';

export type RootStackParamList = {
  Home: undefined;
};

interface ScreenProps {
  navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList>;
  route: RouteProp<RootStackParamList, keyof RootStackParamList>;
}

interface StackScreen {
  name: keyof RootStackParamList;
  component: React.ComponentType<ScreenProps>;
  options: StackNavigationOptions;
}

export const RootStackScreens: StackScreen[] = [
  {
    name: 'Home',
    component: Home,
    options: {
      headerShown: false,
    },
  },
];
