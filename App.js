import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes/index.js';
import 'react-native-gesture-handler';
import React from 'react';
console.disableYellowBox=true;

export default function App() {
  return (
   <NavigationContainer>
      <StatusBar />
      <Routes />
   </NavigationContainer>
  );
}