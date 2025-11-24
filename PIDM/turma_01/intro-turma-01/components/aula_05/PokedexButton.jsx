import { Pressable, Text, StyleSheet } from "react-native"

const PokedexButton = ({titulo, acao}) => {
    return (
        <Pressable 
            style={({pressed}) => pressed?[estilos.botao, estilos.pressionado]:estilos.botao}
            onPress={acao}
        >
            <Text style={estilos.texto}>{titulo}</Text>
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
        borderColor: "orange",

        padding: 5,
        alignItems: "center"
    },

    naoPressionado: {
        
        backgroundColor: "beige",
    },

    pressionado: {
        
        backgroundColor: "red",
    }


})

export default PokedexButton