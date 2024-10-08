import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
export default function App() {
  let [newTask, setNewTask] = React.useState('');
  return (
    <View style={styles.container}>
      <Text>Trabalhando com Hook useState</Text>
      <TextInput onChangeText={setNewTask} placeholder='Tarefas' style={styles.textinp}/>
      <Text></Text>
      <Text>Elemento digitado:</Text>
      <Text>{newTask}</Text>

      {/*<Text style={styles.text}>Cadastro </Text >
    <Text>Digite seu nome</Text>
      <TextInput placeholder='Nome'  style={styles.textinp}/>}
      <Text></Text>
      <Text>Digite seu email:</Text>
      <TextInput placeholder='email'  style={styles.textinp}/>
      <Text></Text>
      <Text>Digite seu CPF:</Text>
  <TextInput placeholder='CPF'  style={styles.textinp}/>

      <TouchableOpacity activeOpacity={0.7} style={styles.button}>
        <Text>Adicionar tarefas</Text>
      </TouchableOpacity>*/}

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
