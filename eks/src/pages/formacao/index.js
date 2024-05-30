import React from "react";
import Item from "../../components/Item";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

// nativeBase e UIKitten

export default function Formacao() {
  const curso = [
    {
      titulo: "Embarque digital",
      curso: "Graduação em Análise e Desenvolvimento de Sistemas - Senac",
      duracao: "Mar/2023 - Jul/2025",
      imgUrl: require('../../../assets/embarque.png'),
    },
    {
      titulo: "CDD 4.0",
      curso: "Curso de desenvolvimento socioemocional e Back-End - Instituto Aliança",
      duracao: "Mar/2024 - Jul/2024",
      imgUrl: require('../../../assets/cdd.png'),
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <Item curso={curso} />

      <StatusBar style="auto"/>
    </SafeAreaView>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCEEEE",
    alignItems: "center",
    justifyContent: "flex-start",
  },
})