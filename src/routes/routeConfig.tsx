import React from 'react';
import Home from 'routes/Home';
import {Person} from 'types';
import AddPerson from './AddPerson';
import FindSomeone from './FindSomeone';
import Settings from './Settings';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from 'helpers/colourPalette';

export type RootTabParamList = {
  Home: undefined;
  FindSomeone: undefined;
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
      color: Colors.paradisePink,
    },
  },
  {
    name: 'FindSomeone',
    component: FindSomeone,
    options: {
      tabBarIcon: props => <Icon name="search" {...props} />,
      color: Colors.orangeYellowCrayola,
    },
  },
  {
    name: 'AddPerson',
    component: AddPerson,
    options: {
      tabBarIcon: props => <Icon name="add" {...props} />,
      color: Colors.caribbeanGreen,
    },
  },
  {
    name: 'Settings',
    component: Settings,
    options: {
      tabBarIcon: props => <Icon name="settings" {...props} />,
      color: Colors.blueNCS,
    },
  },
];
