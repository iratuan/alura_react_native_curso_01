import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Topo from './components/Topo';
import Detalhes from './components/Detalhes';
import Item from './components/Item';
import MyText from '../../components/MyText';

export default ({ topo, detalhes, itens }) => {
    return (
        <>
            <FlatList
                style={estilos.lista}
                data={itens.lista}
                renderItem={Item}
                keyExtractor={(item) => item.nome}
                ListHeaderComponent={() => {
                    return <>
                        <Topo {...topo} />
                        <View style={estilos.cesta}>
                            < Detalhes {...detalhes} />
                        </View>
                        <MyText style={estilos.titulo}>{itens.titulo}</MyText>
                    </>
                }}
            />


        </>)
}

const estilos = StyleSheet.create({
    cesta: {
        padding: 8
    },
  
    titulo: {
        padding: 8,
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 30,
        marginBottom: 20
    },
});