import { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Cliente from '../componentes/Cliente';
import api from '../components/Api';
 
export default function ListarClientes() {

  const [dados, setDados] = useState<any[]>([]);

  function buscarClientes(){

  }





  
  useEffect(
    ()=>{
      buscarClientes()
    }
  );
  

  return (
    <>
      <View style={styles.bloco}>
        <TouchableOpacity style={styles.btn}
        onPress={() => console.log('Cadastrar cliente')}
        >
          <Text style={styles.txtbtn}>Cadastrar Novo Cliente</Text>
        </TouchableOpacity>
      </View>
 
      <View style={styles.bloco}>
        <Text style={styles.titulo}>Lista de Clientes</Text>
 
        <Cliente nome="João" cpf='100.100.100-00' saldo={100} id={1}/>
 
        <Cliente nome="João" cpf='100.100.100-00' saldo={100} id={1}/>
 
        <Cliente nome="João" cpf='100.100.100-00' saldo={100} id={1}/>
      </View>
    </>
  );
}
 
const styles = StyleSheet.create({
  titulo:{
    fontSize:24,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:20
  },
  bloco:{
  width:'100%'
  },
  btn:{
    backgroundColor:'blue',
    marginLeft:'10%',
    marginRight:'10%',
    marginTop:20,
    padding:20,
    borderRadius:20
  },
  txtbtn:{
    textAlign:'center',
    fontSize:20
  }
});