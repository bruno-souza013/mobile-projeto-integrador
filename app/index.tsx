import React from 'react';
import { Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import LoginScreen from '@/screens/Login';
import RecordScreen from '@/screens/Record'; 

export default function Index() {
  const [fontsLoaded] = useFonts({
    'BigShoulders-Regular': require('../assets/fonts/BigShoulders-Regular.ttf'),
    'Azonix': require('../assets/fonts/Azonix.otf'),
  });

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <RecordScreen />
  );
}
