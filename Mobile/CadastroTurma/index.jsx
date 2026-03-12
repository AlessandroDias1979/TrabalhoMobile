import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import Estilo from "../Estilo";

export default function CadastroTurma() {
  const [nome, setNome] = useState("");
  const [ano, setAno] = useState("");
  const [curso, setCurso] = useState("");
  const [turno, setTurno] = useState("");

  return (
    <View style={Estilo.container}>
      <Text style={Estilo.Texto}>Nome da Turma</Text>
      <TextInput
        style={Estilo.input}
        placeholder="Digite o nome da turma"
        value={nome}
        onChangeText={setNome}
        maxLength={100}
        autoCapitalize="words"
      />

      <Text style={Estilo.Texto}>Ano</Text>
      <TextInput
        style={Estilo.input}
        placeholder="Digite o ano da turma"
        value={ano}
        onChangeText={setAno}
        maxLength={4}
        keyboardType="numeric"
      />

      <Text style={Estilo.Texto}>Curso</Text>
      <TextInput
        style={Estilo.input}
        placeholder="Digite o curso da turma"
        value={curso}
        onChangeText={setCurso}
        maxLength={100}
      />

      <Text style={Estilo.Texto}>Turno</Text>
      <TextInput
        style={Estilo.input}
        placeholder="Digite o turno da turma (manhã, tarde, noite)"
        value={turno}
        onChangeText={setTurno}
        maxLength={50}
        autoCapitalize="none"
      />
    </View>
  );
}
