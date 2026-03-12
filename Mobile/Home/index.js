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
      <Text style={Estilo.titulo}>Home</Text>

      <TouchableOpacity style={Estilo.Button} onPress={AbrirTelaCadastroAluno}>
        <Text style={Estilo.ButtonTexto}>Cadastro de Aluno</Text>
      </TouchableOpacity>

      <TouchableOpacity style={Estilo.Button} onPress={AbrirTelaCadastroTurma}>
        <Text style={Estilo.ButtonTexto}>Cadastro de Turma</Text>
      </TouchableOpacity>
    </View>
  );
}