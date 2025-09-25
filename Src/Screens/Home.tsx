import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Spacing, Typography } from '../Theme/index.js';
import ICONS from '../Assets/images/icons/index.js';
import { CButton } from '../Components/shared/index.js';
export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.topBar}>
        <Text style={styles.title}>Flux Send</Text>
        <Image source={ICONS.SETTINGS} style={styles.settingsIcon} />
      </View>
      <View>
        <CButton title="Send File" variant="primary" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Typography.lineHeights['2xs'],
  },
  title: {
    fontSize: Typography.size.xl,
    fontWeight: Typography.fontWeights.bold,
    textAlign: 'center',
    flex: 1,
  },
  settingsIcon: {
    position: 'absolute',
    right: Spacing.md,
    width: Typography.size.xl,
    height: Typography.size.xl,
  },
});
