import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor : '#ffffff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imagem : {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        margin: 10
    },

    imagemLogo : {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        margin: 10
    },
    Button : {
        width: '80%',
        margin: 10,
        borderRadius: 20,
        height: 60,
        backgroundColor: '#154360'
    },
    ButtonText : {
        fontFamily: 'Arial',
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 15,
        color: '#ffffff'
    },
    Texto : {
        fontFamily: 'Arial',
        fontSize: 20,
        textAlign: 'center',
        color: '#87CEEB'
    },
    Input: {
       margin: 10,
       padding: 10,
       width: 300,
       color: '#8a8a8a',
       borderWidth: 1  
    },
    Input2: {
       margin: 10,
       width: '50%',
       borderWidth: 2  
    },
    ViewHorizontal : {
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: 10  
    },
    InputCEP:{
        margin: 10,
        padding: 10,
        width: 100,
        color: '#8a8a8a',
        borderWidth: 1
    }
});

export default styles;