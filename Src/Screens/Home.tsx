import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Dimensions, AppColors, Spacing } from '../Theme/index.js';
export default function Home() {
  return (
    <View>
      <Text>Home</Text>
      <Text>Width: {Dimensions.screenWidth}</Text>
      <Text>Height: {Dimensions.screenHeight}</Text>
      <Text
        style={{
          backgroundColor: AppColors.primary,
          padding: Spacing.sm,
          margin: Spacing.md,
        }}
      >
        Primary: {AppColors.primary}
      </Text>
      <Text
        style={{
          backgroundColor: AppColors.secondary,
          padding: Spacing.sm,
          margin: Spacing.md,
        }}
      >
        Secondary: {AppColors.secondary}
      </Text>

      <Text
        style={{
          color: AppColors.textPrimary,
          padding: Spacing.sm,
          margin: Spacing.md,
        }}
      >
        Text Primary : {AppColors.textPrimary}
      </Text>

      <Text
        style={{
          color: AppColors.textSecondary,
          padding: Spacing.sm,
          margin: Spacing.md,
        }}
      >
        Text Secondary: {AppColors.textSecondary}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
