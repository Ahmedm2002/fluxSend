import { Dimensions } from 'react-native';
let { width, height } = Dimensions.get('window');

const dimensions = {
  screenWidth: width.toFixed(0),
  screenHeight: height.toFixed(0),
  halfWidth: (width / 2).toFixed(0),
  halfHeight: (height / 2).toFixed(0),
};

export default dimensions;
