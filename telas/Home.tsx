import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
 
export default function App() {
 
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Gerenciador de Festas</Text>
 
      <View style={styles.bloco}>
        <TouchableOpacity style={styles.btn}
         onPress={()=>navigation.navigate('ListarClientes' as never)}
        >
          <Text style={styles.txtBtn}>Cliente</Text>
        </TouchableOpacity>
 
        <TouchableOpacity style={styles.btn}
       
        >
          <Text style={styles.txtBtn}>Usuário</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFF0F7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bloco:{
   

  },

  btn:{
    backgroundColor:'#68A7D2',
    marginBottom:22,
    width:200,
    height:70,
    borderRadius:50
  },

  txtBtn:{
    color:'#fff',
    fontSize:24,
    textAlign:'center',
    fontWeight:'bold',
    marginTop:19,
  
    
  },

  titulo:{
    color:'#68A7D2',
    fontSize:40,
    marginBottom:30,
    fontWeight:'bold',
   
  }


});
