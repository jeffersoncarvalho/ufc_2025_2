import { View, Image, StyleSheet } from "react-native"
import PokedexButtonPressable from "./PokedexButtonPressable"
import PokedexLabel from "./PokedexLabel"

const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

const PokedexCard = ({id, nome}) => {
    return (
        <View style={estilos.card}>
            <PokedexLabel texto={nome} />
            <Image 
                style={estilos.imagem}
                
                source={{uri: url + id + ".png"}}
            />
            <PokedexButtonPressable 
                titulo="Capturar" 
                acao={() => alert("CAPTURADO!")}/>
        </View>
    )
}

const estilos = StyleSheet.create({
    card: {
        backgroundColor: "antiquewhite",
        borderWidth: 2,
        borderColor: "#c0c0c0",
        borderRadius: 8,
        padding: 5,

        alignItems: "center",
        alignSelf: "flex-start",
        gap: 10,

    },
    imagem: {
        width: 100,
        height: 100,
    }
})

export default PokedexCard