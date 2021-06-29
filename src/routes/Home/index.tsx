import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Page, TouchableIcon, PersonRow, FlexColCenter} from 'components';
import {usePeople} from 'hooks';
import React from 'react';
import {ScrollView, Text} from 'react-native';
import {RootTabParamList} from 'routes/routeConfig';
import {Hero} from './molecules/Hero';
import * as styles from './styles';

interface HomeProps {
  navigation: StackNavigationProp<RootTabParamList, 'Home'>;
  route: RouteProp<RootTabParamList, 'Home'>;
}

const Home: React.FC<HomeProps> = ({navigation}) => {
  const people = usePeople();

  const handleAddPerson = (): void => {
    navigation.navigate('AddPerson', {});
  };

  return (
    <Page>
      {people.length > 0 ? (
        <>
          <Hero person={people[0]} />
          <ScrollView>
            {people.map(person => (
              <PersonRow key={person.id} person={person} />
            ))}
          </ScrollView>
        </>
      ) : (
        <FlexColCenter>
          <Text>Remember someone's birthday by pressing the plus button</Text>
          <TouchableIcon name="plus" onPress={handleAddPerson} size={20} />
        </FlexColCenter>
      )}
    </Page>
  );
};

export default Home;
