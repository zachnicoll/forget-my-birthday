import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {RootStackParamList} from 'routes/routeConfig';

interface SettingsProps {
  navigation: StackNavigationProp<RootStackParamList, 'Settings'>;
  route: RouteProp<RootStackParamList, 'Settings'>;
}

const Settings: React.FC<SettingsProps> = ({navigation}) => {
  return <></>;
};

export default Settings;
