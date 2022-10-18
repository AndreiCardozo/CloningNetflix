import { View, StatusBar } from 'react-native';
import { LoadingScreen } from './src/screens/LoadingScreen';


import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter';

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
    <View
      style={{
        flex: 1,
      }}>
      <StatusBar style="light" />

      <Routes />
    </View>
  );
}

