import {View, Text, StyleSheet} from "react-native"
import estilos from "./estilos"

const OlaMundoComEstilo = () => {
    return (
        <View style={estilos.container}>
            <Text style={estilos.header}>Olá Mundo com Estilo?</Text>
        </View>
    )
}

/*
const estilos = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#c0c0c0"
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        color: "red"
    }
})
*/
export default OlaMundoComEstilo

