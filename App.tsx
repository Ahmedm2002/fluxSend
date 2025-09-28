import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppNavigation from './Src/Navigation/AppNavigation.jsx';
import { Spacing } from './Src/Theme/index.js';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.appContainer}>
        <AppNavigation />
      </View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    margin: Spacing.sm,
  },
});
