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

      <Text></Text>

      
    </View>
  );