import { useFonts, Asap_400Regular, Asap_700Bold } from '@expo-google-fonts/asap';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import AppRotas from './src/rotas/AppRotas';

export default function App() {
  const [fontsLoaded] = useFonts({
    'AsapRegular': Asap_400Regular,
    'AsapBold': Asap_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <StatusBar />
        <AppRotas />
      </NavigationContainer>
    </SafeAreaView>
  );
}