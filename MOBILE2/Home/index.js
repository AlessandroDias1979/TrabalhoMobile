import {Text, View,TouchableOpacity, Image } from "react-native";
import Estilo from '../Estilo';

export default function Home(props){

    const AbrirTelaAluno = () => {
        props.navigation.navigate('Aluno');
    }

    const AbrirTelaTurma = () => {
        props.navigation.navigate('Turma');
    }

    return(
        <View style={Estilo.container}>
        
        <TouchableOpacity style={Estilo.Button} activeOpacity={0.7} onPress={AbrirTelaAluno}>
            <Text style={Estilo.ButtonText}>Aluno</Text>    
        </TouchableOpacity>

        <TouchableOpacity style={Estilo.Button} activeOpacity={0.7} onPress={AbrirTelaTurma}>
            <Text style={Estilo.ButtonText}>Turma</Text>
        </TouchableOpacity>
        </View>
    )
}

