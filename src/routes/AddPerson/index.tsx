import {css} from '@emotion/native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  FlexRow,
  FlexRowBetween,
  Input,
  Page,
  StyledText,
  TouchableIcon,
} from 'components';
import {RealmCreatePerson} from 'database';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {RootTabParamList} from 'routes/routeConfig';
import {Person} from 'types';
import uuid from 'react-native-uuid';
import * as styles from './styles';
import {Alert} from 'react-native';
import TitleText from 'components/TitleText';
import Colors from 'helpers/colourPalette';

interface AddPersonProps {
  navigation: StackNavigationProp<RootTabParamList, 'AddPerson'>;
  route: RouteProp<RootTabParamList, 'AddPerson'>;
}

interface FormErrors {
  firstname: true;
  lastname: true;
  birthdate: true;
}

const requiredError = 'This field is required';

const AddPerson: React.FC<AddPersonProps> = ({navigation, route}) => {
  const [form, setForm] = useState<Partial<Person>>(
    route?.params?.person ?? {},
  );
  const [errors, setErrors] = useState<Partial<FormErrors>>({});

  const handleSubmit = async (): Promise<void> => {
    let _errors: Partial<FormErrors> = {};
    let _form: Partial<Person> = form;

    if (!_form.firstname) {
      _errors.firstname = true;
    }

    if (!_form.lastname) {
      _errors.lastname = true;
    }

    if (!_form.birthdate) {
      _errors.birthdate = true;
    }

    setErrors(_errors);

    if (Object.keys(_errors).length) {
      return;
    }

    if (!_form.image) {
      _form.image = '';
    }

    _form.id = uuid.v4() as string;

    try {
      await RealmCreatePerson(_form as Person);
      navigation.goBack();
    } catch (e) {
      console.error(e);
      Alert.alert(
        'Could not add birthday',
        'Something went wrong, please try again.',
      );
    }
  };

  return (
    <Page>
      <styles.Container>
        <TitleText>Remember a Birthday</TitleText>

        <Input
          label="Firstname"
          onChangeText={text => setForm({...form, firstname: text})}
          error={errors.firstname ? requiredError : undefined}
          value={form.firstname}
        />

        <Input
          label="Surname"
          onChangeText={text => setForm({...form, lastname: text})}
          error={errors.lastname ? requiredError : undefined}
          value={form.lastname}
        />

        {/* Birthday Date Selection */}
        <StyledText fontSize={18} type="Title">
          Birthday
        </StyledText>

        {/* TODO: Add date picker here */}

        {/* <Input
          label="Birthday"
          onChangeText={_ => setForm({...form, birthdate: new Date()})}
          error={errors.birthdate ? requiredError : undefined}
          value={form.birthdate?.toDateString()}
        /> */}

        {/* Image selection for Person */}
        <View>
          <StyledText fontSize={18} type="Title">
            Image
          </StyledText>
          <FlexRowBetween
            style={css`
              margin-top: 12px;
            `}>
            <styles.ImageSelectButton
              name="camera"
              size={24}
              onPress={() => {
                /* Open the camera to take a picture */
              }}
            />
            <styles.ImageSelectButton
              name="images"
              size={24}
              onPress={() => {
                /* Open the device's album to select a photo */
              }}
            />
          </FlexRowBetween>
        </View>

        <styles.DoneButton name="check" onPress={handleSubmit} />
      </styles.Container>
    </Page>
  );
};

export default AddPerson;
