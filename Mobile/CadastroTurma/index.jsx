import React, { useState } from "react";
import {View, Alert, Text, TextInput, Button,Platform, Switch,
} from "react-native";
import Estilo from "../Estilo";
import { MaskedTextInput } from "react-native-mask-text";
import DateTimePicker from "@react-native-community/datetimepicker"; // default import correto
import { MultipleSelectList, SelectList } from "react-native-dropdown-select-list";

export default function CadastroTurma(props) {

    const [nome, setNome] = useState("");
 
  }

  return (
    <View style={Estilo?.container}>
    
      <TextInput
        label="Nome do Turma"
        Estilo={Estilo.input}
        setcalor = {setNome}
        textoaoiniciarl = "Digite o nome do turma"
        value={turma}
        maxLength={100}
      />

      <TextInput
      label="Ano"
      Estilo={Estilo.input}
      setcalor = {setAno}
      textoaoiniciarl = "Digite o ano da turma"
      value={ano}
      maxLength={4}
      keyboardType="numeric"
      />

      <TextInput
      label="Curso"
      Estilo={Estilo.input}
      setcalor = {setCurso}
      textoaoiniciarl = "Digite o curso da turma"
      value={curso}
      maxLength={100}
      />

      <TextInput
      label="Turno"
      Estilo={Estilo.input}
      setcalor = {setTurno}
      textoaoiniciarl = "Digite o turno da turma"
      value={turno}
      maxLength={50}
      />
    </View>
  );
  /*Criar um novo APP que tenha um menu com uma tela de cadastro de aluno e outra tela de cadastro de turma.

A tela de cadastro de Aluno deve poder cadastrar os  seguintes dados:

Nome, Data de Nascimento , Sexo, Endereço

A tela de Cadastro de Turma deve poder cadastrar os seguintes dados:

Nome da Turma,  Ano,  Curso, Turno*/