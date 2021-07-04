import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Page} from 'components';
import TitleText from 'components/TitleText';
import React from 'react';
import {RootTabParamList} from 'routes/routeConfig';

interface SettingsProps {
  navigation: StackNavigationProp<RootTabParamList, 'Settings'>;
  route: RouteProp<RootTabParamList, 'Settings'>;
}

const Settings: React.FC<SettingsProps> = ({navigation}) => {
  return (
    <Page>
      <TitleText>Settings</TitleText>
    </Page>
  );
};

export default Settings;
