import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppNavigation from './Src/Navigation/AppNavigation.jsx';
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
      <View style={styles.appContainer}>
        <AppNavigation />
      </View>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appContainer: {
    padding: Spacing.xs,
  },
});
