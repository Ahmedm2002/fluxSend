import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppNavigation from './Src/Navigation/AppNavigation';
import { Spacing } from './Src/Theme/index.js';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaView>
  );
}

function AppContent() {
  return (
    <>
      <View style={styles.container}>
        <AppNavigation />
      </View>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Spacing.xs,
  },
});
