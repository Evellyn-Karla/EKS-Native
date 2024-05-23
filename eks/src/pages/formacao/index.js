import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Image } from 'react-native';

// nativeBase e UIKitten

export default function Formacao() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.nome}>ADS - Senac pelo Embarque Digital e CDD 4.0</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  nome: {
    fontSize: 24,
  },

 
});