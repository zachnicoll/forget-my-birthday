import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Line, Page, PersonRow, StyledText} from 'components';
import TitleText from 'components/TitleText';
import Colors from 'helpers/colourPalette';
import {formatName} from 'helpers/general';
import {usePeople} from 'hooks';
import React, {useState, useMemo} from 'react';
import {ScrollView} from 'react-native';
import {RootTabParamList} from 'routes/routeConfig';
import {Person} from 'types';
import * as styles from './styles';

interface FindSomeoneProps {
  navigation: StackNavigationProp<RootTabParamList, 'FindSomeone'>;
  route: RouteProp<RootTabParamList, 'FindSomeone'>;
}

const FindSomeone: React.FC<FindSomeoneProps> = ({}) => {
  const people = usePeople();
  const [search, setSearch] = useState('');

  const sortedPeople = useMemo(() => {
    // Stores People against the first letter of their first name
    const firstLetterMap: {[letter: string]: Person[]} = {};

    people
      // Sort alphabetically by first name...
      .sort((p1, p2) => p1.firstname.localeCompare(p2.firstname))
      .forEach(person => {
        // Convert name and search to lower case for comparison
        const name = formatName(person).toLocaleLowerCase();
        if (name.includes(search.toLocaleLowerCase())) {
          // Get the first letter of the first name
          const letter = person.firstname[0];

          if (!firstLetterMap[letter]) {
            // Add it to an existing array of people with the same first letter
            firstLetterMap[letter] = [person];
          } else {
            // Create a new array for people with the same first letter, and add this person
            firstLetterMap[letter].push(person);
          }
        }
      });

    return firstLetterMap;
  }, [people, search]);

  return (
    <Page>
      <TitleText>Find Someone</TitleText>

      <styles.SearchInput
        placeholder="Start typing..."
        placeholderTextColor="white"
        value={search}
        onChangeText={setSearch}
      />

      <ScrollView>
        {Object.keys(sortedPeople).map(key => (
          <styles.SectionContainer key={key}>
            <StyledText fontSize={24} type="Title">
              {key}
            </StyledText>
            <Line numDashes={20} gap={1.5} color={Colors.orangeYellowCrayola} />
            {sortedPeople[key].map(person => (
              <PersonRow
                person={person}
                key={person.id}
                color={Colors.orangeYellowCrayola}
              />
            ))}
          </styles.SectionContainer>
        ))}
      </ScrollView>
    </Page>
  );
};

export default FindSomeone;
