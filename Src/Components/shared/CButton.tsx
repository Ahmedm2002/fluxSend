import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AppColors, Typography } from '../../Theme';

interface CBtnProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  additionalStyles?: any | '';
}

const CButton: React.FC<CBtnProps> = ({
  title,
  onPress,
  variant = 'primary',
  additionalStyles,
}) => {
  return (
    <TouchableOpacity
      style={[
        { ...additionalStyles, ...styles.base },
        // ...additionalStyles,
        // styles.base,
        variant === 'primary' ? styles.primary : styles.secondary,
      ]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          variant === 'primary' ? styles.textPrimary : styles.textSecondary,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CButton;

const styles = StyleSheet.create({
  base: {
    paddingVertical: Typography.lineHeights.xs,
    paddingHorizontal: Typography.lineHeights.xs,
    borderRadius: Typography.size.xs,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: Typography.lineHeights['2xs'],
    marginVertical: Typography.lineHeights.xs,
  },

  primary: {
    backgroundColor: AppColors.primary,
  },

  secondary: {
    backgroundColor: AppColors.primaryLight,
  },

  text: {
    fontSize: Typography.size.md,
    fontWeight: Typography.fontWeights.medium as any,
  },
  textPrimary: {
    color: AppColors.white,
  },
  textSecondary: {
    color: AppColors.primary,
  },
});
