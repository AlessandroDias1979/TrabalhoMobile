import React, { useState } from "react";
import { View, Text, TextInput, Button, Platform, Switch } from "react-native";
import Estilo from "../Estilo";
import DateTimePicker from "@react-native-community/datetimepicker";
import { SelectList } from "react-native-dropdown-select-list";
import TextoInput from "../Componentes/TextInput.jsx";

export default function CadastroAluno(props) {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [sexo, setSexo] = useState("");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const abrirData = () => {
    setShow(true);
  };

  const dados = [
    { key: "M", value: "Masculino" },
    { key: "F", value: "Feminino" },
    { key: "O", value: "Não Informado" },
  ];

  return (
    <View style={Estilo.container}>
     
      <Text style={Estilo.Texto}>Nome do Aluno</Text>
      <TextInput
        style={Estilo.input}
        placeholder="Digite o nome do aluno"
        value={nome}
        onChangeText={setNome}
        maxLength={100}
      />

    
      <View style={Estilo.ViewHorizontal}>
        <Text style={Estilo.Texto}>Data</Text>
        <TextInput
          style={Estilo.Input2}
          editable={false}
          value={date.toLocaleDateString("pt-BR")}
        />
        <Button onPress={abrirData} title="Selecionar Data" />
      </View>

      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )
      }
      <SelectList
        dropdownStyles={{ marginBottom: 20 }}
        data={dados}
        setSelected={setSexo}
        save="key"                
        placeholder="Selecione o sexo"
        boxStyles={Estilo.input} 

        />
      <Text style={Estilo.Texto}>Endereço</Text>
      <TextInput
        style={Estilo.input}
        placeholder="Digite o endereço do aluno"
        value={endereco}
        onChangeText={setEndereco}
        maxLength={200}
      />
    </View>
  );
}