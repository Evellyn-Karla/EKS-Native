
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes'

// nativeBase e UIKitten

export default function App() {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}
