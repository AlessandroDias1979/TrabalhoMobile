import { StyleSheet } from "react-native";
import { Button } from "react-native/types_generated/index";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        margin: 10
    },

    Button : {
        width: '80%',
        height: 10,
        borderRadius: 20,
        height: 50,
        backgroundColor: '#0161c9',
    },

    ButtonText: {
        fontFamily: 'Arial',
        fontSize: 18,
        textAlign: 'center',
        paddingTop: 15,
        color: '#fff',
    
    },

    Texto : {
        fontFamily: 'Arial',
        fontSize: 18,
        textAlign: 'center',
        color: '#000'
    },

    Input : {
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