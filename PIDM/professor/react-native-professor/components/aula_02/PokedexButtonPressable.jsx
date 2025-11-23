import { Pressable, Text, StyleSheet } from "react-native"

const PokedexButtonPressable = ({acao, titulo}) => {
    return (
        <Pressable 
            style={
                ({pressed}) => [
                    estilos.botao,
                    pressed?estilos.pressionado:estilos.naoPressionado
                ] 
            } 
            onPress={acao}>
            <Text style={estilos.texto}>{titulo}</Text>
        </Pressable>
    )
}

const estilos = StyleSheet.create({
    botao: {
        borderRadius: 8,
        borderWidth: 2,
        borderColor: "orange",
        padding: 5,
        alignItems: "center",
       
    },
    naoPressionado: {
        backgroundColor: "beige",
    },
    pressionado: {
        backgroundColor: "red",
    },
    texto: {
        color: "orange",
        fontSize: 16,
        fontWeight: "bold"
    }
})

export default PokedexButtonPressable