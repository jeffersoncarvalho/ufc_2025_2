import { Pressable, Text, StyleSheet } from "react-native"

const PokedexButton = () => {
    return (
        <Pressable style={estilos.botao}>
            <Text style={estilos.texto}>Capturar</Text>
        </Pressable>
    )
}

const estilos = StyleSheet.create({
    texto: {
        color: "orange",
        fontSize: 16,
        fontWeight: "bold"
    },
    botao: {
        backgroundColor: "beige",
        borderRadius: 8,
        borderWidth: 2,
        borderColor: "orange"
    }
})

export default PokedexButton