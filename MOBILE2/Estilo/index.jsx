import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor : '#ffffff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imagem : {
        width: 300,
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
       width: 400,
       borderWidth: 1  
    },
    Input2: {
       margin: 10,
       width: '50%',
       borderWidth: 1  
    },
    ViewHorizontal : {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10  
    }
});

export default styles;