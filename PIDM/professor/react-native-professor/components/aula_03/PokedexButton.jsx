import { TouchableOpacity, Text, StyleSheet } from "react-native"

const PokedexButton = ({acao, titulo}) => {
    return (
        <TouchableOpacity style={estilos.botao} onPress={acao}>
            <Text style={estilos.texto}>{titulo}</Text>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    botao: {
        borderRadius: 8,
        borderWidth: 2,
        borderColor: "orange",
        backgroundColor: "beige",

        padding: 12,
        alignItems: "center",
        alignSelf: "flex-start"
    },
    texto: {
        color: "orange",
        fontSize: 16,
        fontWeight: "bold"
    }
})

export default PokedexButton