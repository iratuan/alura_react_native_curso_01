import React from "react";
import { StyleSheet, View, Image, FlatList } from "react-native";
import MyText from "../../../components/MyText";

export default ({item}) => {
    return <View style={estilos.items} key={item.nome}>
        <Image style={estilos.imagem} source={item.imagem} />
        <MyText style={estilos.nomeImagem} >{item.nome}</MyText>
    </View>
   
}

const estilos = StyleSheet.create({

    items: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#ececec",
        borderRadius: 20,
        marginVertical: 3,
        padding: 6,
        marginHorizontal:8
    },
    nomeImagem: {
        marginLeft: 16
    },
    imagem: {
        marginVertical: 6,
        marginHorizontal: 6,
        borderColor: "#f0f0f0",
        borderRadius: 20,
    }
});