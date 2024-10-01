import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from './App';


export default function App() {
  return (
    <View style={styles.container}>
      <Text><strong>Cadastro</strong></Text>
      <Text>Digite seu nome</Text>
      <TextInput placeholder='Nome' style={styles.textinp} />
      <Text></Text>
      <Text>Digite seu email:</Text>
      <TextInput placeholder='email' style={styles.textinp} />
      <StatusBar style="auto" />
    </View>
  );
}
