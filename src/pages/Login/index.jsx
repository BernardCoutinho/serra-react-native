import React from "react";
import {View, Text, TextInput, Linking} from 'react-native';
import {style} from "./styles";
import {Button} from 'react-native-elements';


export default function Login(){

        return(
            <View style={style.container}>
                <View>
                    <Text>português (Brasil)</Text>
                </View>
                <View style={style.container3}>
                     <Text style={style.logo}>Instagram</Text>
                </View>
               
                <View style={style.container1}>
                    
                    <TextInput 
                        style={style.inputTxt}
                        placeholder="Número de telefone, email ou nome de usuário"/>
                    <TextInput 
                        style={style.inputTxt}
                        secureTextEntry={true}
                        placeholder="Digite sua senha!"/>
                        <Button buttonStyle={style.botao} title="Login"/>
                </View>   

                <View style={style.container2}>  
                    <Text> Esqueceu seus dados de login?
                        <Text style={style.txtLink}
                            onPress={() => Linking.openURL('https://www.instagram.com/accounts/password/reset/')}>
                            Obtenha ajuda para entrar
                        </Text>
                    </Text>
                    <Text style={{color:'grey'}}>OU</Text>                                 
                    <Button buttonStyle={style.botao} title="Entre com o Facebook" />   
                </View>

                <View style={style.rodape}>
                    <Text>Não tem conta? <Text style={style.txtLink}>Cadastre-se</Text></Text> 
                       
                </View>           
            </View>
        );
    
}