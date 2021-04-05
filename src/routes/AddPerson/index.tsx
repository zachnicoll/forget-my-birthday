import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {RootStackParamList} from 'routes/routeConfig';

interface AddPersonProps {
  navigation: StackNavigationProp<RootStackParamList, 'AddPerson'>;
  route: RouteProp<RootStackParamList, 'AddPerson'>;
}

const AddPerson: React.FC<AddPersonProps> = ({navigation}) => {
  return <></>;
};

export default AddPerson;
