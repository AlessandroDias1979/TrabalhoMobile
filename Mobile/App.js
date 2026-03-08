import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./Home";
import CadastroAluno from "./CadastroAluno";
import CadastroTurma from "./CadastroTurma";

export default function App() {

  const Stack = createStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='CadastroAluno' component={CadastroAluno} />
            <Stack.Screen name='CadastroTurma' component={CadastroTurma} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}


/*Criar um novo APP que tenha um menu com uma tela de cadastro de aluno e outra tela de cadastro de turma.

A tela de cadastro de Aluno deve poder cadastrar os  seguintes dados:

Nome, Data de Nascimento , Sexo, Endereço

A tela de Cadastro de Turma deve poder cadastrar os seguintes dados:

Nome da Turma,  Ano,  Curso, Turno*/
