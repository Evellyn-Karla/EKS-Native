import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, SafeAreaView, Image } from 'react-native';
import { width, height, size, fontSize } from "react-native-responsive-sizes";
// nativeBase e UIKitten

export default function App() {
    return (
      <SafeAreaView style={styles.container}>
        <Image source={require('../../../assets/Misc_01.png')} style={styles.star1} />
        <Image source={require('../../../assets/Misc_01.png')} style={styles.star2} />
        <Image source={require('../../../assets/Misc_04.png')} style={styles.smile} />
        <View style={styles.containerText}>
            <Text style={styles.nome}>Evellyn Karla</Text>
            <Text style={styles.titulo}>Estudante de Análise e Desenvolvimento de Sistemas</Text>
        </View>
        <View style={styles.containerImg}>
          <View style={styles.conteinerB}></View>
          <Image source={require('../../../assets/eu2.png')} style={styles.imagem}/>
        </View>
        
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFBAD3',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 0,
  },
  star1:{
    width: size(40),
    height: size(40),
    position: 'absolute',
    left: width(16),
    top: height(48),
    zIndex: 8
  },
  star2:{
    width: size(44),
    height: size(44),
    position: 'absolute',
    right: width(34),
    top: height(24),
    zIndex: 8
  },
  smile:{
    width: size(70),
    height: size(70),
    position: 'absolute',
    right: width(16),
    top: height(34),
    zIndex: 8
  },
  containerText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerImg: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  conteinerB:{
    backgroundColor: '#EB5A35', 
    height: height(35),
    width: width(95),
    borderRadius: 20,
    zIndex: -8,
    position: 'absolute',
    bottom: 0
  },
  nome: {
    fontSize: fontSize(36),
    color: 'black'
  },
  titulo: {
    color: 'black',
    fontSize: fontSize(14),
    textAlign: "center"
  },
  imagem: {
    resizeMode: "cover",
    height: height(60),
    width: width(95),
    
  }
});