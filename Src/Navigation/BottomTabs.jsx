import React from 'react';
import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, TransferHome, Profile } from '../Screens/index.js';
import ICONS from '../Assets/images/icons/index.js';

const Tabs = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <View style={{ flex: 1, height: 40 }}>
      <Text>Bottom Tabs</Text>
      <Tabs.Navigator>
        <Tabs.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarActiveTintColor: 'balck',
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? ICONS.HOME_FOCUSED : ICONS.HOME_OUTLINE}
                style={{ width: 20, height: 25 }}
                resizeMode="contain"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Transfers"
          component={TransferHome}
          options={{
            headerShown: false,
            tabBarActiveTintColor: 'balck',
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? ICONS.HOME_FOCUSED : ICONS.HOME_OUTLINE}
                style={{ width: 20, height: 25 }}
                resizeMode="contain"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            tabBarActiveTintColor: 'balck',
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? ICONS.USER_FOCUSED : ICONS.USER_OUTLINE}
                style={{ width: 20, height: 25 }}
                resizeMode="contain"
              />
            ),
          }}
        />
      </Tabs.Navigator>
    </View>
  );
};

export default BottomTabs;
