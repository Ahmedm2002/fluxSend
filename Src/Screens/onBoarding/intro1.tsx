import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function intro1() {
  const onBoarding = [
    {
      title: 'Fast transfers',
      subTitle:
        'Send large files in seconds with our optimized peer-peer connection.',
      iconUrl: '',
      btnText: 'Next',
    },
    {
      title: 'Secure encryption',
      subTitle:
        'Send large files in seconds with our optimized peer-peer connection.',
      iconUrl: '',
      btnText: 'Next',
    },
    {
      title: 'Peer-to-peer sharing',
      subTitle:
        'Send large files in seconds with our optimized peer-peer connection.',
      iconUrl: '',
      btnText: 'Get Started',
    },
  ];
  return (
    <View style={styles.container}>
      {onBoarding.map(screen => (
        <>
          <Text>{screen.title}</Text>
          <Text>{screen.subTitle}</Text>
          <Text>{screen.btnText}</Text>
        </>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
