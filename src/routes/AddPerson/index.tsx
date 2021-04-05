import {css} from '@emotion/native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Page} from 'components';
import {RealmCreatePerson} from 'database';
import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {RootStackParamList} from 'routes/routeConfig';
import {Person} from 'types';
import uuid from 'react-native-uuid';
import * as styles from './styles';

interface AddPersonProps {
  navigation: StackNavigationProp<RootStackParamList, 'AddPerson'>;
  route: RouteProp<RootStackParamList, 'AddPerson'>;
}

interface FormErrors {
  firstname: true;
  lastname: true;
  birthdate: true;
}

const requiredError = 'This field is required';

const AddPerson: React.FC<AddPersonProps> = ({navigation, route}) => {
  const [form, setForm] = useState<Partial<Person>>(route.params.person ?? {});
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

    _form.id = uuid() as string;

    try {
      await RealmCreatePerson(_form as Person);
      navigation.goBack();
    } catch (e) {
      console.error(e);
      // TODO: display failure message
    }
  };

  return (
    <Page>
      <styles.Container>
        <View>
          <Text>Firstname</Text>
          <TextInput
            onChangeText={text => setForm({...form, firstname: text})}
          />
          <Text>Surname</Text>
          <TextInput
            onChangeText={text => setForm({...form, lastname: text})}
          />
          <Text>Birthday</Text>
          <TextInput
            onChangeText={text => setForm({...form, birthdate: new Date()})}
          />
          <Text>Image</Text>
          <FontAwesome5Icon name="plus" />
        </View>

        <TouchableOpacity
          onPress={handleSubmit}
          style={css`
            width: 100%;
            background-color: lightgreen;
            height: 64px;
            border-radius: 50px;
            justify-content: center;
            align-items: center;
          `}>
          <FontAwesome5Icon name="check" />
        </TouchableOpacity>
      </styles.Container>
    </Page>
  );
};

export default AddPerson;
