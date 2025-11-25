import {View, Text, StyleSheet} from "react-native"
 
const PokedexLabel = ({label}) => {
    return (
        <View>
            <Text style={estilos.texto}>{label}</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    texto: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black"
    }
})

export default PokedexLabel