import { View, Text, TextInput, Button, Image } from "react-native";
import Estilo from '../Estilo'; 
import { useState } from "react";
import { MaskedTextInput } from "react-native-mask-text";
import {SelectList } from "react-native-dropdown-select-list";


export default function Turma(props){

    const [nomeTurma, setNomeTurma] = useState('')
    const [ano, setAno] = useState('')
    const [curso, setCurso] = useState('')
    const [turno, setTurno] = useState('')

    const dados = [
        {key: '1', value: 'Manhã'},
        {key: '2', value: 'Tarde'},
        {key: '3', value: 'Noite'}
    ]

    return(
            <View style={Estilo.container}>
                <Text style={Estilo.Texto}>Cadastro de Turma</Text>

                <Image 
                source={require('../assets/LogoTurma.png')}
                style={Estilo.imagem}
                />  

                <TextInput 
                style={Estilo.Input}
                placeholder="Digite o nome da turma"
                maxLength={80}
                value={nomeTurma}
                onChangeText={setNomeTurma}
                />

                <MaskedTextInput
                
                mask="9999"
                placeholder="Digite o ano da turma"
                keyboardType="numeric"
                value={ano}
                onChangeText={setAno}
                style={Estilo.Input}
                
                />

                <TextInput 
                style={Estilo.Input}
                placeholder="Digite o nome do curso"
                maxLength={80}
                value={curso}
                onChangeText={setCurso}
                />

                 <SelectList
                dropdownStyles={{marginBottom: 20}}
                data={dados}
                setSelected={setTurno}
                save="key"
                placeholder="Selecione o turno"

                />

            </View>
    )

}

/*Criar um novo APP que tenha um menu com uma tela de cadastro de aluno e outra tela de cadastro de turma.

A tela de cadastro de Aluno deve poder cadastrar os  seguintes dados:

Nome, Data de Nascimento , Sexo, Endereço

A tela de Cadastro de Turma deve poder cadastrar os seguintes dados:

Nome da Turma,  Ano,  Curso, Turno*/