import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Typography } from '../../Theme/index.js';
export default function RecieveFile() {
  return (
    <View style={styles.container}>
      <Text style={styles.sendTitle}>
        Reciever: Enter Sender's Email or User Name
      </Text>
      <Text style={styles.sendSubText}>
        Enter the user name or email to start recieveing files
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  sendTitle: {
    textAlign: 'center',
    fontSize: Typography.size.xxl,
    fontWeight: Typography.fontWeights.bold,
    paddingVertical: Typography.lineHeights.sm,
    paddingHorizontal: '10%',
  },
  sendSubText: {
    textAlign: 'center',
    fontSize: Typography.size.lg,
    paddingHorizontal: '5%',
  },
});
