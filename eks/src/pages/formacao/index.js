import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { width, height, size, fontSize } from "react-native-responsive-sizes";
import { View, StyleSheet, Text, SafeAreaView, Image } from 'react-native';

// nativeBase e UIKitten

export default function Formacao() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerForma}>
        <Text style={styles.titulo}>Formação</Text>
        <View style={styles.item1}>
          <View>
          <Text style={styles.tItem1}>Embarque Digital</Text>
          <Text style={styles.cItem1}>Graduação em ADS no Senac</Text>
          <Text style={styles.cItem1}>De 2023 à 2025</Text>
          </View>
          <Image source={require('../../../assets/embarque.png')} style={styles.img1} />
        </View>
      
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCEEEE',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  containerForma: {
    width: width(95),
    height: height(50),
    marginTop: height(2),
    borderRadius: size(30),
    backgroundColor: '#005E42',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  titulo:{
    fontSize: fontSize(26),
    paddingLeft: size(21),
    paddingTop: size(15),
    color: '#FCEEEE'
  },
  item1:{
    marginTop: size(10),
    backgroundColor: '#3D8D75',
    width: width(85),
    height: height(16),
    alignSelf: 'center',
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderWidth: 2,
    borderRadius: size(20),
    flexDirection: 'row'
  },
  tItem1:{
    fontSize: fontSize(14),
    color: '#FCEEEE',
    width: width(42),
    textAlign: 'center',
    backgroundColor: '#D33928',
    borderRadius: size(20),
    margin: 16
  },
  cItem1:{
    fontSize: fontSize(10),
    color: '#FCEEEE',
    width: width(42),
    textAlign: 'left',
    marginLeft: size(6)
  },
  img1:{
    width: size(160),
    height: size(120),
    alignSelf: 'flex-end'
  },
  nome: {
    fontSize: 24,
  },

 
});