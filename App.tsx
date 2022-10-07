import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { LoadingScreen } from './src/screens/LoadingScreen';
import { SelectionProfile } from './src/screens/SelectionProfile';

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter';

import { THEME } from './src/theme';
import { Home } from './src/screens/Home';
import { Routes } from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });

  if (!fontsLoaded) {
    return <LoadingScreen />;
  }

  return (
    <View style={{
      flex: 1,
    }}>

      <Routes />
    </View>
  );
}

