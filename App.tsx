import { View, StatusBar } from 'react-native';
import { LoadingScreen } from './src/screens/LoadingScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import { useState } from 'react';

import { Routes } from './src/routes'

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter';




export default function App() {

  const [user, setUser] = useState(null);


  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });


  if (!user) {
    return <LoginScreen changeStatus={(user) => setUser(user)} />
  }

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

