import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
 
interface propClientes{
    id:number,
    nome:string,
    cpf:string,
    saldo:number
}
 
export default function Cliente({id, nome, cpf, saldo}:propClientes){
    return(
        <>
            <Text>Cod.: {id}</Text>
            <Text>Nome: {nome}</Text>
            <Text>CPF: {cpf}</Text>
            <Text>Saldo: {saldo}</Text>
 
            <View>
             <TouchableOpacity>
                <Text>Excluir</Text>    
            </TouchableOpacity>
           
             <TouchableOpacity>
                <Text>Editar</Text>    
            </TouchableOpacity>
            </View>      
        </>
    )
}
 