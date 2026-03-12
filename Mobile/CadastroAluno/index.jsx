import React, { useState } from "react";
import {View, Alert, Text, TextInput, Button,Platform, Switch,
} from "react-native";
import Estilo from "../Estilo";
import { MaskedTextInput } from "react-native-mask-text";
import DateTimePicker from "@react-native-community/datetimepicker"; // default import correto
import { MultipleSelectList, SelectList } from "react-native-dropdown-select-list";

export default function CadastroAluno(props) {

    const [nome, setNome] = useState("");
 
  }

  const onchange = (event, selectedDate ) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    }

    const abrirData = () => {
        setShow(true);
    }
    const dados = [
        {key: 'M', value:'Masculino'},
        {key: 'F', value:'Feminino'},
        {key: 'O', value:'Não Informado'}
    ]

  return (
    <View style={Estilo?.container}>
    
      <TextInput
        label="Nome do Aluno"
        Estilo={Estilo.input}
        setcalor = {setNome}
        textoaoiniciarl = "Digite o nome do aluno"
        value={nome}
        maxLength={100}
      />

      <Text></Text>

      <View style={Estilo.ViewHorizontal}>
                <Text style={Estilo.Texto}>Data</Text>            
                <TextInput
                    style={Estilo.Input2}
                    editable={false}
                    value={date.toLocaleDateString()}
                />            
                <Button onPress={abrirData} title="Selecionar Data" />
            </View>

            { show && (
                    <DateTimePicker
                        value = {date}
                        mode = "date"
                        display = "default"
                        onChange={onchange}
                    />
                )
            }
             <SelectList
                dropdownStyles={{marginBottom: 20}}
                data={dados}
                setSelected={setSexo}
                save="key"
                placeholder="Selecione o sexo"
            />

      <TextInput
      label="Endereço"
      Estilo={Estilo.input}
      setcalor = {setEndereco}
      textoaoiniciarl = "Digite o endereço do aluno"
      value={endereco}
      maxLength={200}
      />



            </View>

            
  );
