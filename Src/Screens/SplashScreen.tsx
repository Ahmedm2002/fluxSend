import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Dimensions, AppColors, Spacing } from '../Theme/index.js';

export default function SplashScreen() {
  const navigation = useNavigation<any>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home');
      return () => clearTimeout(timer);
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <View style={[styles.box, styles.topLeft]} />
        <View style={[styles.box, styles.topRight]} />
        <View style={[styles.box, styles.bottomLeft]} />
        <View style={[styles.box, styles.bottomRight]} />
      </View>

      <Text style={styles.title}>Flux Send</Text>
      <Text style={styles.subtitle}>Fast • Secure • Reliable</Text>

      <View style={styles.progressContainer}>
        <View style={styles.progressBackground}>
          <View style={styles.progressFill} />
        </View>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>

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
  logo: {
    width: 80,
    height: 80,
    marginBottom: 24,
    position: 'relative',
  },
  box: {
    position: 'absolute',
    width: 40,
    height: 40,
  },
  topLeft: {
    top: 0,
    left: 0,
    backgroundColor: AppColors.secondary,
    borderTopLeftRadius: 9999,
  },
  topRight: {
    top: 0,
    right: 0,
    backgroundColor: AppColors.primary,
    borderTopRightRadius: 9999,
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    backgroundColor: AppColors.primary,
    borderBottomLeftRadius: 9999,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    backgroundColor: AppColors.secondary,
    borderBottomRightRadius: 9999,
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
  progressContainer: {
    width: parseInt(Dimensions.screenWidth) * 0.7,
    marginTop: Spacing.xxl,
    alignItems: 'center',
  },
  progressBackground: {
    width: '100%',
    height: 10,
    borderRadius: 9999,
    backgroundColor: AppColors.primary + '33',
  },
  progressFill: {
    width: '75%',
    height: '100%',
    backgroundColor: AppColors.primary,
    borderRadius: 9999,
  },
  loadingText: {
    marginTop: 8,
    fontSize: 14,
    color: AppColors.textSecondary,
  },
  footer: {
    position: 'absolute',
    bottom: 16,
    fontSize: 12,
    color: AppColors.textSecondary,
  },
});
