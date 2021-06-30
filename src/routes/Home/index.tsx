import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Page, TouchableIcon, FlexColCenter} from 'components';
import {isAfter, startOfDay} from 'date-fns';
import {usePeople} from 'hooks';
import React from 'react';
import {Text} from 'react-native';
import {RootTabParamList} from 'routes/routeConfig';
import {Hero} from './molecules/Hero';
import UpcomingBirthdays from './molecules/UpcomingBirthdays';

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
          <Hero
            person={
              people.filter(p =>
                isAfter(p.birthdate, startOfDay(new Date())),
              )[0]
            }
          />
          <UpcomingBirthdays people={people} />
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
