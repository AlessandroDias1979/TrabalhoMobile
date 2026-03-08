import {Text, View,TouchableOpacity, Image } from "react-native";
import Estilo from '../Estilo';

export default function Home(props) {

    const AbrirTelaCadastroAluno = () => {
      props.navigation.navigate('CadastroAluno');   
    }

    const AbrirTelaCadastroTurma = () => {
      props.navigation.navigate('CadastroTurma'); 
    }

    return{

    }
}