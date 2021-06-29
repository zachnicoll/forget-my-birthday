import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootTabParamList, RootStackScreens} from 'routes/routeConfig';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from 'components/CustomTabBar';

const RootTab = createBottomTabNavigator<RootTabParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <RootTab.Navigator
        initialRouteName="Home"
        tabBar={props => <CustomTabBar {...props} />}>
        {RootStackScreens.map(screen => (
          <RootTab.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={screen.options}
          />
        ))}
      </RootTab.Navigator>
    </NavigationContainer>
  );
};

export default App;
