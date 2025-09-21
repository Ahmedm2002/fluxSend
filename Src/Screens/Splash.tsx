import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Spacing, Dimensions } from '../Theme/index.js';

function Splash() {
  return (
    <>
      <View style={styles.container}>
        <Text>Splash screen</Text>
      </View>
    </>
  );
}

export default Splash;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Spacing.xs,
  },
});
