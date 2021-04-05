import {RouteProp} from '@react-navigation/core';
import {
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';
import React from 'react';
import Home from 'routes/Home';
import {Person} from 'types';
import AddPerson from './AddPerson';
import ViewPeople from './ViewPeople';
import Settings from './Settings';

export type RootStackParamList = {
  Home: undefined;
  AddPerson: {
    person?: Person;
  };
  ViewPeople: undefined;
  Settings: undefined;
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
  {
    name: 'AddPerson',
    component: AddPerson,
    options: {
      headerTitle: 'Remember a Birthday',
    },
  },
  {
    name: 'ViewPeople',
    component: ViewPeople,
    options: {},
  },
  {
    name: 'Settings',
    component: Settings,
    options: {},
  },
];
