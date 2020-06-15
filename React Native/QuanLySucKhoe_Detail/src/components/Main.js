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
import Forgetpass from './Screen/Forgetpass';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
// const isLoggedIn = false;//

// function HomeScreen() {
//   return (
//     // eslint-disable-next-line react-native/no-inline-styles
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }
const homeTab = createBottomTabNavigator();
function homeTabscreen() {
  return (
    <homeTab.Navigator>
      <homeTab.Screen name="Home" component={HomeComponents} />
      <homeTab.Screen name="MenuEx" component={MenuExComponents} />
      <homeTab.Screen name="Jogging" component={JoggingComponents} />
      <homeTab.Screen name="Sleep" component={SleepComponents} />
    </homeTab.Navigator>
  );
}

function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShow: false}}>
        <Stack.Screen name="Login" component={LoginComponents} />
        <Stack.Screen name="Registration" component={RegistrationComponents} />
        <Stack.Screen name="Forgetpass" component={Forgetpass} />
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={homeTabscreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;
