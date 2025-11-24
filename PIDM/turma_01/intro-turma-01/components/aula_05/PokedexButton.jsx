import { Pressable, Text, StyleSheet } from "react-native"

const PokedexButton = ({titulo}) => {
    return (
        <Pressable>
            <Text style={estilos.texto}>{titulo}</Text>
        </Pressable>
    )
}

const estilos = StyleSheet.create({
    texto: {
        color: "orange",
        fontSize: 16,
        fontWeight: "bold"
    }
})

export default PokedexButton