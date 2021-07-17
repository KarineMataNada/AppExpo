import "react-native-gesture-handler";
import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Input, Text, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { Warp, Paragrafo, Loguinho, Icone} from './styles';
import img from '../../images/logo.png'

export default function Login({navigation}) {

    function handleEntrar(){
        navigation.navigate('Home');       
    }

    function handleCadastro(){
        navigation.navigate('Cadastro');        
    }

  return (
    <Warp>
      <Loguinho source={img} />
      <Text > Bem vindo! </Text>
      <Input
        placeholder="Email"
        leftIcon={{ type: "font-awesome", name: "envelope" }}      />
      <Input
        placeholder="Senha"
        leftIcon={{ type: "font-awesome", name: "lock" }}
        secureTextEntry={true}
      />

      <Button onPress={handleEntrar}
        type="clear"
        icon={
          <Icone name="arrow-right" size={20} color="white" />
        }
        title="Entrar"
      />

      <View>
        <TouchableOpacity
        onPress={handleCadastro}>
          <Paragrafo>
            Não tem uma conta?
            clique aqui para Cadastrar
          </Paragrafo>
        </TouchableOpacity>
      </View>
    </Warp>
  );
}

