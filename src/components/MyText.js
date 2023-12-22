import React from "react";
import { Text, StyleSheet } from "react-native";

export default ({children, style}) => {
    let estilo = estilos.texto;

    if(style?.fontWeight === 'bold'){
        estilo = estilos.textoBold;
    }
    return<Text style={[estilo, style]}>{children}</Text>
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily:'MontserratRegular',
        fontWeight: 'normal'
    },
    textoBold:{
        fontFamily:'MontserratBold',
        fontWeight: 'normal'
    }
});
