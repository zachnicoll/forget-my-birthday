import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import {RootStackParamList} from 'routes/routeConfig';

interface HomeProps {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
  route: RouteProp<RootStackParamList, 'Home'>;
}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <View>
      <Text>Home Page!</Text>
    </View>
  );
};

export default Home;
