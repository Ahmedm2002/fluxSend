import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigation from './Src/Navigation/AppNavigation';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
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
  },
});
