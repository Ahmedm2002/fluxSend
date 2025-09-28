import { StyleSheet, Text, View } from 'react-native';
import { AppColors, Typography } from '../../Theme/index.js';
import React from 'react';

export default function TransferFile() {
  return (
    <View style={styles.container}>
      <Text style={styles.sendFileText}>Select File</Text>
      <Text style={styles.subText}>Browse and select files</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sendFileText: {
    fontSize: Typography.size.xl,
    fontWeight: Typography.fontWeights.bold,
    paddingHorizontal: Typography.size.md,
    paddingVertical: Typography.size.xs,
  },
  subText: {
    paddingHorizontal: Typography.size.md,
    fontSize: Typography.size.sm,
    color: AppColors.textSecondary,
  },
});
