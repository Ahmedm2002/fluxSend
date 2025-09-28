import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AppColors, Spacing } from '../Theme/index.js';

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    console.log('UseEffect Triggered');
    const timer = setTimeout(() => {
      navigation.replace('Intro1');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flux Send</Text>
      <Text style={styles.subtitle}>Fast • Secure • Reliable</Text>
      <Text style={styles.footer}>Version 1.0.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.md,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: AppColors.textPrimary,
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: AppColors.textSecondary,
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 16,
    fontSize: 12,
    color: AppColors.textSecondary,
  },
});
