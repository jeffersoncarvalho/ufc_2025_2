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
        backgroundColor: "whitesmoke",
        borderWidth: 2,
        borderColor: "#c0c0c0",
        borderRadius: 8,
        padding: 10,

        alignItems: "center",
        alignSelf: "flex-start"
        
    },
    imagem: {
        width: 100,
        height: 100,
        marginBottom: 5
    }
})

export default PokedexCard