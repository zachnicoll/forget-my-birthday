import {css} from '@emotion/native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Input, Page, StyledText} from 'components';
import {RealmCreatePerson} from 'database';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {RootTabParamList} from 'routes/routeConfig';
import {Person} from 'types';
import uuid from 'react-native-uuid';
import * as styles from './styles';

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
      // TODO: display failure message
    }
  };

  return (
    <Page>
      <styles.Container>
        <StyledText
          type="Title"
          style={css`
            font-size: 32px;
            text-align: center;
          `}>
          Remember a Birthday
        </StyledText>
        <View>
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

          <Input
            label="Birthday"
            onChangeText={_ => setForm({...form, birthdate: new Date()})}
            error={errors.birthdate ? requiredError : undefined}
            value={form.birthdate?.toDateString()}
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
