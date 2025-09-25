import { scale, verticalScale } from 'react-native-size-matters';

const typography = {
  size: {
    xs: scale(10),
    sm: scale(12),
    md: scale(14),
    lg: scale(16),
    xl: scale(20),
    xxl: scale(24),
    '2xl': scale(28),
    title: scale(32),
  },
  fontWeights: {
    regular: '400' as const,
    medium: '500' as const,
    bold: '700' as const,
  },
  lineHeights: {
    '2xs': verticalScale(4),
    xxs: verticalScale(8),
    xs: verticalScale(12),
    sm: verticalScale(16),
    md: verticalScale(20),
    lg: verticalScale(24),
    xl: verticalScale(32),
  },
  letterSpacing: {
    xs: verticalScale(0),
    sm: verticalScale(5),
    md: verticalScale(10),
    lg: verticalScale(15),
    xl: verticalScale(20),
  },
};

export default typography;
