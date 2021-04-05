import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {RootStackParamList} from 'routes/routeConfig';

interface ViewPeopleProps {
  navigation: StackNavigationProp<RootStackParamList, 'ViewPeople'>;
  route: RouteProp<RootStackParamList, 'ViewPeople'>;
}

const ViewPeople: React.FC<ViewPeopleProps> = ({navigation}) => {
  return <></>;
};

export default ViewPeople;
