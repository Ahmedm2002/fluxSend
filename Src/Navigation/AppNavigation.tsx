import React from 'react';
import {
  Home,
  Signup,
  Login,
  TransferFile,
  ConnectFriend,
  RecieveFile,
  Intro1,
  Intro2,
  Intro3,
  Profile,
  Settings,
  Splash,
} from '../Screens/index.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{ headerShown: false }}
        >
          {/* Splash Screen */}

          <Stack.Screen name="SplashScreen" component={Splash} />

          {/* Introduction Screens */}
          <Stack.Screen name="Intro1" component={Intro1} />
          <Stack.Screen name="Intro2" component={Intro2} />
          <Stack.Screen name="Intro3" component={Intro3} />

          {/* Auth Screens */}
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />

          {/* User Related screens */}
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Settings" component={Settings} />

          {/*  File transfer related screens */}
          <Stack.Screen name="TransferFile" component={TransferFile} />
          <Stack.Screen name="ConnectFriend" component={ConnectFriend} />
          <Stack.Screen name="RecieveFile" component={RecieveFile} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default AppNavigation;
