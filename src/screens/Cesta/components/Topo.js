import React from "react";
import { Image , StyleSheet , Dimensions} from "react-native";
import MyText from "../../../components/MyText";
import topo from '../../../../assets/topo.png';

const _height = Dimensions.get('screen').height;

export default ({titulo}) => {
    return <>
        <Image source={topo} style={estilos.topo} />
        <MyText style={estilos.titulo}>{titulo}</MyText>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: _height / 2.75
    },
    titulo: {
        position: "absolute",
        textAlign: "center",
        width: "100%",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold',
        padding: 16,
    },
});