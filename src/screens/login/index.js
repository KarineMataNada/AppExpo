import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Input, Text, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Login({navigation}) {

    function handleEntrar(){
        navigation.navigate('Home');        
    }

    function handleCadastro(){
        navigation.navigate('Cadastro');        
    }

  return (
    <View style={styles.container}>
      <Image style={styles.Loguinho} source={require("../../images/logo.png")} />
      <Text h3> Bem vindo! </Text>
      <Input
        placeholder="Email"
        leftIcon={{ type: "font-awesome", name: "envelope" }}
        style={styles}
      />
      <Input
        placeholder="Senha"
        leftIcon={{ type: "font-awesome", name: "lock" }}
        style={styles}
        secureTextEntry={true}
      />

      <Button onPress={handleEntrar}
        type="clear"
        icon={
          <Icon
            name="arrow-right"
            size={20}
            color="white"
            style={styles.icon}
          />
        }
        title="Entrar"
      />

      <View>
        <TouchableOpacity
        onPress={handleCadastro}>
          <Text style={styles.p}>
            Não tem uma conta?
            clique aqui para Cadastrar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9ecef",
    alignItems: "center",
    justifyContent: "center",
  },
  Loguinho: {
    width: 200,
    height: 100,
  },
  p: {
    textAlign: "center",
    paddingTop: 20,
  },
  icon: {
    color: "green",
  },
});
