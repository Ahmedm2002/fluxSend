import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AppColors, Typography } from '../../Theme';

interface CButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
}

const CButton: React.FC<CButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
}) => {
  console.log('title', title);
  return (
    <TouchableOpacity
      style={[
        styles.base,
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
        {title.toString()}
      </Text>
    </TouchableOpacity>
  );
};

export default CButton;

const styles = StyleSheet.create({
  base: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  primary: {
    backgroundColor: AppColors.primary,
  },
  secondary: {
    backgroundColor: AppColors.secondary,
  },
  text: {
    fontSize: Typography.size.md,
    fontWeight: Typography.fontWeights.medium as any,
  },
  textPrimary: {
    color: AppColors.primary,
  },
  textSecondary: {
    color: AppColors.primary,
  },
});
