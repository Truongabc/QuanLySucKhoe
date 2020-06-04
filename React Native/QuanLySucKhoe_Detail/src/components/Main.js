import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import JoggingComponents from './Screen/Jogging';
import LoginComponents from './Screen/Login';
import MenuExComponents from './Screen/MenuEx';
import RegistrationComponents from './Screen/Registration';
import SleepComponents from './Screen/Sleep';
import HomeComponents from './Screen/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const isLoggedIn = true;

// function HomeScreen() {
//   return (
//     // eslint-disable-next-line react-native/no-inline-styles
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }
function Main() {
  return (
    <NavigationContainer>
      {!isLoggedIn ? (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginComponents} />
          <Stack.Screen
            name="Registration"
            component={RegistrationComponents}
          />
          <Stack.Screen name="Home" component={HomeComponents} />
          <Stack.Screen name="Jogging" component={JoggingComponents} />
          <Stack.Screen name="sleep" component={SleepComponents} />
          <Stack.Screen name="MenuEx" component={MenuExComponents} />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeComponents} />
          <Tab.Screen name="MenuEx" component={MenuExComponents} />
          <Tab.Screen name="Jogging" component={JoggingComponents} />
          <Tab.Screen name="sleep" component={SleepComponents} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}

export default Main;
