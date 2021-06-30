import {css} from '@emotion/native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Line, Page, PersonRow, StyledText} from 'components';
import Colors from 'helpers/colourPalette';
import {formatName} from 'helpers/general';
import {usePeople} from 'hooks';
import React from 'react';
import {useState} from 'react';
import {useMemo} from 'react';
import {ScrollView} from 'react-native';
import {RootTabParamList} from 'routes/routeConfig';
import {Person} from 'types';
import * as styles from './styles';

interface ViewPeopleProps {
  navigation: StackNavigationProp<RootTabParamList, 'ViewPeople'>;
  route: RouteProp<RootTabParamList, 'ViewPeople'>;
}

const ViewPeople: React.FC<ViewPeopleProps> = ({}) => {
  const people = usePeople();
  const [search, setSearch] = useState('');

  const sortedPeople = useMemo(() => {
    const firstLetterMap: {[letter: string]: Person[]} = {};
    people
      .sort((p1, p2) => p1.firstname.localeCompare(p2.firstname))
      .forEach(person => {
        const name = formatName(person).toLocaleLowerCase();
        if (name.includes(search.toLocaleLowerCase())) {
          const letter = person.firstname[0];
          if (!firstLetterMap[letter]) {
            firstLetterMap[letter] = [person];
          } else {
            firstLetterMap[letter].push(person);
          }
        }
      });
    return firstLetterMap;
  }, [people, search]);

  return (
    <Page>
      <StyledText
        fontSize={24}
        type="Title"
        style={css`
          text-align: center;
        `}>
        Find Someone
      </StyledText>
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

export default ViewPeople;
