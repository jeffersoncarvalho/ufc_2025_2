import {View, Image, StyleSheet} from "react-native"
import PokedexLabel from "./PokedexLabel"
import PokedexButton from "./PokedexButton"

const url = "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/"

const pokemons = [
    {
        nome: "Bulbasaur",
        id: 1,
        imagem: "100.png"
    }
]

const PokedexCard = () => {
    return (
        <View style={estilos.card}>
            <Image 
                style={estilos.imagem}
                source={
                    {uri: url + pokemons[0].imagem}
                }
            />
            <PokedexLabel label={pokemons[0].nome}/>
            <PokedexButton titulo= "Capturar" acao={() => alert("CAPTURADO!")} />
            
        </View>
    )
}

const estilos = StyleSheet.create({
    card: {
        
        borderWidth: 2,
        borderRadius: 8,
        borderColor: "#c0c0c0",

        padding: 10,

        alignSelf: "flex-start",
        alignItems: "center",
        gap: 10
    },
    imagem: {
        width: 100,
        height: 100,

        backgroundColor: "whitesmoke",
        borderRadius: 8
    }
})

export default PokedexCard