import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, TransferHome, Profile } from '../Screens/index.js';

const Tabs = createBottomTabNavigator();
const BottomTabs = () => {
  return (
    <View>
      <Tabs.Navigator>
        <Tabs.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Tabs.Screen
          name="Transfers"
          component={TransferHome}
          options={{ headerShown: false }}
        />
        <Tabs.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
      </Tabs.Navigator>
    </View>
  );
};

export default BottomTabs;
