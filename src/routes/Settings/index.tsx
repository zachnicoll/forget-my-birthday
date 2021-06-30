import {css} from '@emotion/native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Input, Page, StyledText} from 'components';
import React from 'react';
import {TextInput} from 'react-native';
import {RootTabParamList} from 'routes/routeConfig';

interface SettingsProps {
  navigation: StackNavigationProp<RootTabParamList, 'Settings'>;
  route: RouteProp<RootTabParamList, 'Settings'>;
}

const Settings: React.FC<SettingsProps> = ({navigation}) => {
  return (
    <Page>
      <StyledText
        type="Title"
        style={css`
          font-size: 24px;
          text-align: center;
        `}>
        Settings
      </StyledText>
    </Page>
  );
};

export default Settings;
