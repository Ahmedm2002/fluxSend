import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { Spacing } from '../Theme/index.js';
import { useNavigation } from '@react-navigation/native';

function SplashScreen() {
  const navigation = useNavigation<any>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 1000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <>
      <View style={styles.container}>
        <Text>Splash screen</Text>
      </View>
    </>
  );
}

export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Spacing.xs,
  },
});
