import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cadastro </Text >
      <Text>Digite seu nome</Text>
      <TextInput placeholder='Nome'  style={styles.textinp}/>
      <Text></Text>
      <Text>Digite seu email:</Text>
      <TextInput placeholder='email'  style={styles.textinp}/>
      <Text></Text>
      <Text>Digite seu CPF:</Text>
      <TextInput placeholder='CPF'  style={styles.textinp}/>
      <TouchableOpacity activeOpacity={0.7} style={styles.button}>
        <Text>Enviar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinp:{
    backgroundColor:'#4F4F4F',
    width:200,
    height:30,
    borderRadius:7,
    padding:30,
    textDecorationColor:'#4F4F4F',
  },
button:{
  backgroundColor:'#DCDCDC',
  padding:15,
  borderRadius:7,
  alignItems:'center',
  marginTop:20,
  width:300,
},
 text:{
  fontSize:35,
  color:'#000000'

 }

});
