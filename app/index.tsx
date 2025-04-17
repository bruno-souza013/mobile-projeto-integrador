import React, { useCallback } from 'react'
import { Text, View } from 'react-native'
import { useFonts } from 'expo-font'
import LoginScreen from "@/screens/Login"
import RecordScreen from '@/screens/Record'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()


export default function Index() {
  const [fontsLoaded] = useFonts({
    'BigShoulders-Regular': require('../assets/fonts/BigShoulders-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null; 
  }

  return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name = 'Login' component={LoginScreen}/>
      <Stack.Screen name = 'RecordScreen' component={RecordScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
)
}
