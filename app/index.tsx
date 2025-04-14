import React, { useCallback } from 'react'
import { Text, View } from 'react-native'
import { useFonts } from 'expo-font'
import LoginScreen from "@/screens/Login"

export default function Index() {
  // Carregando a fonte Big Shoulders
  const [fontsLoaded] = useFonts({
    'BigShoulders-Regular': require('../assets/fonts/BigShoulders-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null; 
  }

  return <LoginScreen />;
}
