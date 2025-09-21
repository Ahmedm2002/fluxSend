import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Home, TransferHome, Profile } from '../Screens/index.js';

const Tabs = createBottomTabNavigator();
const navigate = useNavigation();

const BottomTabs = () => {
  return (
    <View>
      <Tabs.Navigator>
        <Tabs.Screen name="Home" component={Home} />
        <Tabs.Screen name="Transfers" component={TransferHome} />
        <Tabs.Screen name="Profile" component={Profile} />
      </Tabs.Navigator>
    </View>
  );
};

export default BottomTabs;
