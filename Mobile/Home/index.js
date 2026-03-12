import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import Estilo from "../Estilo";

export default function Home({ navigation }) {
  const AbrirTelaCadastroAluno = () => {
    navigation.navigate("CadastroAluno");
  };

  const AbrirTelaCadastroTurma = () => {
    navigation.navigate("CadastroTurma");
  };

  return (
    <View style={Estilo.container}>

      <Image source={require("../assets/logo.png")} style={Estilo.Image} />

      <TouchableOpacity style={Estilo.ButtonText}
      activeOpacity={0.7} onPress={AbrirTelaCadastroAluno}>
        <Text style={Estilo.ButtonText} > Cadastro de Aluno</Text>
      </TouchableOpacity>

      <TouchableOpacity style={Estilo.ButtonText} activeOpacity={0.7} onPress={AbrirTelaCadastroTurma}>
        <Text style={Estilo.ButtonText}>Cadastro de Turma</Text>
      </TouchableOpacity>
    </View>
  );
}