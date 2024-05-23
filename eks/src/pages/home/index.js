import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Image } from 'react-native';

// nativeBase e UIKitten

export default function App() {
    return (
      <SafeAreaView style={styles.container}>
        
        <Image source={require('../../../assets/eu.jpeg')}
        style={styles.imagem} />
        <Text style={styles.nome}>Ola! Me chamo Evellyn Karla, tenho 20 anos e adoro programar.</Text>
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
  imagem: {
    width: 200,
    height: 200

  }
});