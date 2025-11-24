import {View, Image, StyleSheet} from "react-native"
import PokedexLabel from "./PokedexLabel"
import PokedexButton from "./PokedexButton"

const PokedexCard = ({id, nome}) => {
    return (
        <View style={estilos.card}>
            <PokedexLabel nome={nome} />
            <Image
                style={estilos.imagem}
                source={
                   {uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png"} 
                }
            />
            <PokedexButton
                titulo="Capturar"
                acao={() => alert("CAPTURADO!")}
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    card: {

    },
    imagem: {
        width: 100,
        height: 100
    }
})

export default PokedexCard