import React from 'react';
import Home from 'routes/Home';
import {Person} from 'types';
import AddPerson from './AddPerson';
import ViewPeople from './ViewPeople';
import Settings from './Settings';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

export type RootTabParamList = {
  Home: undefined;
  ViewPeople: undefined;
  AddPerson: {
    person?: Person;
  };
  Settings: undefined;
};

export interface CustomTabNavOptions extends BottomTabNavigationOptions {
  color: string;
}

interface TabScreen {
  name: keyof RootTabParamList;
  component: React.ComponentType<any>;
  options: CustomTabNavOptions;
}

export const RootStackScreens: TabScreen[] = [
  {
    name: 'Home',
    component: Home,
    options: {
      tabBarIcon: props => <Icon name="home" {...props} />,
      color: '#EF476F',
    },
  },
  {
    name: 'AddPerson',
    component: AddPerson,
    options: {
      tabBarIcon: props => <Icon name="add" {...props} />,
      color: '#FFD166',
    },
  },
  {
    name: 'ViewPeople',
    component: ViewPeople,
    options: {
      tabBarIcon: props => <Icon name="search" {...props} />,
      color: '#06D6A0',
    },
  },
  {
    name: 'Settings',
    component: Settings,
    options: {
      tabBarIcon: props => <Icon name="settings" {...props} />,
      color: '#118AB2',
    },
  },
];
