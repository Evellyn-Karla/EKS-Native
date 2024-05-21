import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
      <Image source={require('./assets/eu.jpeg')}
      style={styles.imagem} />
      <Text style={styles.nome}>Evellyn Karla</Text>
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
    marginTop: 16,
    marginBottom: 16,
    borderRadius: 20,
    width: 200, height: 200
  }
});
