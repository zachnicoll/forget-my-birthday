import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Page, TouchableIcon, PersonRow, FlexColCenter} from 'components';
import {usePeople} from 'hooks';
import React from 'react';
import {ScrollView, Text} from 'react-native';
import {RootStackParamList} from 'routes/routeConfig';
import {Hero} from './molecules/Hero';
import * as styles from './styles';

interface HomeProps {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
  route: RouteProp<RootStackParamList, 'Home'>;
}

const Home: React.FC<HomeProps> = ({navigation}) => {
  const people = usePeople();

  const handleAddPerson = (): void => {
    navigation.navigate('AddPerson', {});
  };

  const handleViewPeople = (): void => {
    navigation.navigate('ViewPeople');
  };

  const handleViewSettings = (): void => {
    navigation.navigate('Settings');
  };

  return (
    <Page>
      {people.length > 0 ? (
        <>
          <Hero person={people[0]} />
          <ScrollView>
            {people.map(person => (
              <PersonRow person={person} />
            ))}
          </ScrollView>

          <styles.FooterContainer>
            <TouchableIcon name="bars" onPress={handleViewPeople} />
            <TouchableIcon name="plus" onPress={handleAddPerson} />
            <TouchableIcon name="cog" onPress={handleViewSettings} />
          </styles.FooterContainer>
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
