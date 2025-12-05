import { View, Text, StyleSheet } from "react-native"

const PokedexLabel = ({texto}) => {
    return (
        <View>
            <Text style={estilos.texto}>
                {texto}
            </Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {

    },
    texto: {
        fontSize: 18,
        fontWeight: "bold",
        color: "red"
    }
})

export default PokedexLabel