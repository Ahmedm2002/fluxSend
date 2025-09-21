import { useWindowDimensions } from 'react-native';

const { height, width } = useWindowDimensions();

const dimensions = {
  screenWidth: width,
  screenHeight: height,
  halfWidth: width / 2,
  halfHeight: height / 2,
  quarterWidth: width / 4,
  quarterHeight: height / 4,
  isSmallDevice: width < 360,
};

export default dimensions;
