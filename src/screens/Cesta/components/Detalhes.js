import React from "react";
import { View, Image, StyleSheet,  TouchableOpacity} from "react-native";
import MyText from "../../../components/MyText";


export default ({nome, nomeFazenda, logoFazenda, descricao, preco, botao}) => {
    return <>
        <MyText style={estilos.nome}>{nome}</MyText>
        <View style={estilos.fazenda}>
            <Image source={logoFazenda} style={estilos.imagemFazenda} />
            <MyText style={estilos.nomeFazenda}>{nomeFazenda}</MyText>
        </View>
        <MyText style={estilos.descricao}>{descricao}</MyText>
        <MyText style={estilos.preco}>R$ {preco}</MyText>
        <TouchableOpacity style={estilos.botao}>
            <MyText style={estilos.textoBotao}>{botao}</MyText>
        </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: 'bold',
    },
    fazenda: {
        flexDirection: 'row',
        paddingVertical: 12
    },
    imagemFazenda: {
        width: 32,
        height: 32
    },
    nomeFazenda: {
        marginLeft: 12,
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold',
    },
    descricao: {
        color: "#a3a3a3",
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: "#2a9f85",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
        fontWeight: 'bold',
    }, 
    botao:{
        marginTop:16,
        backgroundColor:"#2a9f85",
        paddingVertical: 16,
        borderRadius: 6
    },
    textoBotao: {
        textAlign:'center',
        color:"#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold'
    }
});