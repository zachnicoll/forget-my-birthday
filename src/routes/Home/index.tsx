import {css} from '@emotion/native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  FlexColCenter,
  FlexRowBetween,
  Page,
  TouchableFlexRowBetween,
  TouchableIcon,
} from 'components';
import {usePeople} from 'hooks';
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RootStackParamList} from 'routes/routeConfig';
import * as styles from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface HomeProps {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
  route: RouteProp<RootStackParamList, 'Home'>;
}

const Home: React.FC<HomeProps> = ({}) => {
  const people = usePeople();

  return (
    <Page scrollEnabled={false}>
      <FlexRowBetween>
        <TouchableIcon name="bars" />
        <TouchableIcon name="plus" />
        <TouchableIcon name="cog" />
      </FlexRowBetween>
      <FlexColCenter
        style={css`
          padding-top: 10px;
        `}>
        <View
          style={css`
            width: 200px;
            height: 200px;
            border-color: black;
            border-width: 1px;
            border-radius: 400px;
          `}
        />
        <Text>Zach's birthday is today!</Text>
        <styles.Line />
      </FlexColCenter>
      <ScrollView
        style={css`
          flex-grow: 1;
          border-color: black;
          border-width: 1px;
        `}>
        <TouchableFlexRowBetween>
          <View
            style={css`
              width: 80px;
              height: 80px;
              border-color: black;
              border-width: 1px;
              border-radius: 400px;
            `}
          />
          <View
            style={css`
              flex-grow: 1;
              padding: 10px;
              margin-horizontal: 10px;
              border-color: black;
              border-width: 1px;
              border-radius: 400px;
            `}>
            <Text>Zach Nicoll</Text>
            <Text>65 Days</Text>
          </View>
        </TouchableFlexRowBetween>
      </ScrollView>
    </Page>
  );
};

export default Home;
