import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CButton } from '../../Components/shared';
import { AppColors, Typography } from '../../Theme';

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.mainSection}>
        <Text style={styles.appTitle}>Flux Send</Text>
        <Text style={styles.subTitle}>
          Seamlessly transfer files across devices
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          By Continuing , you agree to our Terms of Service and Privacy Policy
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  mainSection: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    textAlign: 'center',
    paddingBottom: Typography.size.sm,
  },
  footer: {
    paddingHorizontal: '3%',
  },
  appTitle: {
    fontSize: Typography.size['2xl'],
    fontWeight: Typography.fontWeights.bold,
  },
  subTitle: {
    color: AppColors.textSecondary,
  },
  btn: {
    paddingVertical: Typography.size.sm,
  },
});
