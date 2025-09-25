import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, TransferHome, Profile } from '../Screens/index.js';
import ICONS from '../Assets/images/icons/index.js';
import { Typography } from '../Theme/index.js';

const Tabs = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <View style={{ flex: 1 }}>
      <Tabs.Navigator style={styles.bottomTabs}>
        <Tabs.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarActiveTintColor: 'balck',
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? ICONS.HOME_FOCUSED : ICONS.HOME_OUTLINE}
                resizeMode="contain"
                style={styles.bottomIcon}
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
                source={focused ? ICONS.SHARE_FOCUSED : ICONS.SHARE_OUTLINE}
                resizeMode="contain"
                style={styles.bottomIcon}
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
                resizeMode="contain"
                style={styles.bottomIcon}
              />
            ),
          }}
        />
      </Tabs.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomIcon: {
    width: Typography.size.xxl,
  },
  bottomTabs: {
    flex: 1,
    height: Typography.size['2xl'],
  },
});

export default BottomTabs;
