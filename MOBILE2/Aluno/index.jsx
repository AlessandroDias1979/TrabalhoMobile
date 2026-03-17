import { View, Text, TextInput, Button, Platform, Alert, Switch, Image } from "react-native";
import Estilo from '../Estilo'; 
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import {SelectList } from "react-native-dropdown-select-list";
import { MaskedTextInput } from "react-native-mask-text";

export default function Aluno(props){
    const [nome, setNome] = useState('')
    const [date, setDate] = useState(new Date())
    const [show, setShow] = useState(false)
    const [sexo, setSexo] = useState('')
    const [endereco, setEndereco] = useState('')
    const [complemento, setComplemento] = useState('')
    const [numero, setNumero] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')

    const onchange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);}

    const abrirData = () => {
        setShow(true);}

    const dados = [
        {key:'M', value:'Masculino'},
        {key:'F', value:'Feminino'},
        {key:'O', value:'Outro'},
    ]  
    
    const estados = [
        {key:'AC', value:'Acre'},
        {key:'AL', value:'Alagoas'},
        {key:'AP', value:'Amapá'},
        {key:'AM', value:'Amazonas'},
        {key:'BA', value:'Bahia'},
        {key:'CE', value:'Ceará'},
        {key:'DF', value:'Distrito Federal'},
        {key:'ES', value:'Espírito Santo'},
        {key:'GO', value:'Goiás'},
        {key:'MA', value:'Maranhão'},
        {key:'MT', value:'Mato Grosso'},
        {key:'MS', value:'Mato Grosso do Sul'},
        {key:'MG', value:'Minas Gerais'},
        {key:'PA', value:'Pará'},
        {key:'PB', value:'Paraíba'},
        {key:'PR', value:'Paraná'},
        {key:'PE', value:'Pernambuco'},
        {key:'PI', value:'Piauí'},
        {key:'RJ', value:'Rio de Janeiro'},
        {key:'RN', value:'Rio Grande do Norte'},
        {key:'RS', value:'Rio Grande do Sul'},
        {key:'RO', value:'Rondônia'},
        {key:'RR', value:'Roraima'},
        {key:'SC', value:'Santa Catarina'},
        {key:'SP', value:'São Paulo'},
        {key:'SE', value:'Sergipe'},
        {key:'TO', value:'Tocantins'},
    ]

    return(

        

            <View style={Estilo.container}>

                <Text style={Estilo.Texto}>Cadastro de Aluno</Text>

                <Image 
                source={require('../assets/LogoAluno.png')}
                style={Estilo.imagem}
                />  

                <TextInput
                style={Estilo.Input}
                placeholder="Digite seu nome"
                maxLength={80}
                value={nome}
                onChangeText={setNome}
                />

            <View style={Estilo.ViewHorizontal}>

                <Text style={Estilo.Texto}>Data de Nascimento</Text>
                <TextInput
                
                style={Estilo.Input}
                editable={false}
                value={date.toLocaleDateString()}

                />
                <Button onPress={abrirData} title ="Selecionar Data"/>

            </View>

        {show && (
                <DateTimePicker
                value={date}
                mode="date"
                display="default"
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

            <Text style = {Estilo.Texto}>Endereço</Text>
            <TextInput
                style={Estilo.Input}
                placeholder="Digite seu endereço"
                maxLength={100}
                value={endereco}
                onChangeText={setEndereco}
            />

            <TextInput
                style={Estilo.Input}
                placeholder="Complemento do endereço"
                maxLength={100}
                value={complemento}
                onChangeText={setComplemento}
            />

            <MaskedTextInput 
            
            mask="99999-999"
            placeholder="CEP (99999-999)"
            keyboardType="numeric"
            style={Estilo.InputCEP}
            value={numero}
            onChangeText={(masked) => {
                SVGAnimatedEnumeration(masked);
            }}            
            />

            <TextInput
            
                style={Estilo.Input}
                placeholder="Cidade"
                maxLength={100}
                value={cidade}
                onChangeText={setCidade}
            
            />

            <SelectList 
                dropdownStyles={{marginBottom: 20}}
                data={estados}
                setSelected={setEstado}
                save="key"
                placeholder="Selecione o estado"  
            />

            </View>



    )

}

/*Criar um novo APP que tenha um menu com uma tela de cadastro de aluno e outra tela de cadastro de turma.

A tela de cadastro de Aluno deve poder cadastrar os  seguintes dados:

Nome, Data de Nascimento , Sexo, Endereço

A tela de Cadastro de Turma deve poder cadastrar os seguintes dados:

Nome da Turma,  Ano,  Curso, Turno*/