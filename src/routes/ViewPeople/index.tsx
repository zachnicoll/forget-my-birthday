import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {RootTabParamList} from 'routes/routeConfig';

interface ViewPeopleProps {
  navigation: StackNavigationProp<RootTabParamList, 'ViewPeople'>;
  route: RouteProp<RootTabParamList, 'ViewPeople'>;
}

const ViewPeople: React.FC<ViewPeopleProps> = ({navigation}) => {
  return <></>;
};

export default ViewPeople;
