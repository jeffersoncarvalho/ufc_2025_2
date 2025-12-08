import { View, Image, Text, StyleSheet } from "react-native"
import { useContext } from "react"

import PokedexButtonPressable from "./PokedexButtonPressable"
import PokedexLabel from "./PokedexLabel"
import { PokemonContext } from "./PokemonProvider"

const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

const PokedexCard = ({id, nome, imagem, habilidades}) => {
    const {capturarPokemon} = useContext(PokemonContext)
    return (
        <View style={estilos.card}> 
            <PokedexLabel texto={nome} />
            <Image 
                style={estilos.imagem}
                
                source={{uri: imagem? imagem: url + id + ".png"}}
            />
            <View style={estilos.habilidades}>
                {habilidades.map(
                    (habilidade) => <Text style={estilos.habilidade} key={id+habilidade}>{habilidade}</Text> 
                )}
            </View>
            <PokedexButtonPressable 
                titulo="Capturar" 
                acao={() =>{ 
                        alert(`Pokemon ${nome} capturado!`)
                        return capturarPokemon({id,nome,imagem,habilidades})} 
                    }/>
        </View>
    )
}

const estilos = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: "antiquewhite",
        borderWidth: 2,
        borderColor: "#c0c0c0",
        borderRadius: 8,
        padding: 5,
        margin: 10,

        alignItems: "center",
        alignSelf: "flex-start",
        gap: 5,

    },
    habilidades: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        marginBottom: 5
    },
    habilidade: {
        backgroundColor: "purple",
        color: "white",

        width: 45,
        textAlign: "center",

        fontSize: 10,
        paddingLeft: 4,
        paddingRight: 4,
        paddingBottom: 2,

        borderRadius: 5
    },
    imagem: {
        width: 100,
        height: 100,
    }
})

export default PokedexCard