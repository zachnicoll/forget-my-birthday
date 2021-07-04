import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Page, TouchableIcon, FlexColCenter, StyledText} from 'components';
import Confetti from 'components/Confetti';
import {isAfter, startOfDay} from 'date-fns';
import {usePeople} from 'hooks';
import React from 'react';
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

  const heroPerson = people.filter(p =>
    isAfter(p.birthdate, startOfDay(new Date())),
  )[0];

  return (
    <Page>
      <Confetti numPieces={100} />
      {people.length > 0 ? (
        heroPerson ? (
          <>
            <Hero person={heroPerson} />
            <UpcomingBirthdays people={people} />
          </>
        ) : (
          <FlexColCenter>
            <StyledText>No upcoming birthdays for this year!</StyledText>
          </FlexColCenter>
        )
      ) : (
        <FlexColCenter>
          <StyledText>
            Remember someone's birthday by pressing the plus button
          </StyledText>
          <TouchableIcon name="plus" onPress={handleAddPerson} size={20} />
        </FlexColCenter>
      )}
    </Page>
  );
};

export default Home;
