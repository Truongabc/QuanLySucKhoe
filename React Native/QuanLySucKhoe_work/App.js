import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// logged out
import LoginComponents from './src/components/Login/LoginComponents';
import RegistrationComponents from './src/components/registration/RegistrationComponents';

// logged in
import MainComponents from './src/components/Home/MainComponents';
// import JoggingComponents from './src/components/Jogging/JoggingComponents';
import MenuExCaloComponents from './src/components/MenuExportCalo/MenuExCaloComponents';
// import SleepComponents from './src/components/Sleep/SleepComponents';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const isLoggedIn = false;

function App() {
  return (
    <NavigationContainer>
      {!isLoggedIn ? (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginComponents} />
          <Stack.Screen name="Register" component={RegistrationComponents} />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={MainComponents} />
          <Tab.Screen name="Profile" component={MenuExCaloComponents} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
