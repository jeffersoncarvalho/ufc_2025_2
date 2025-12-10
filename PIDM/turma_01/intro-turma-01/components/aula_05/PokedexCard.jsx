import {View, Image, StyleSheet} from "react-native"
import { useContext } from "react"
import PokedexLabel from "./PokedexLabel"
import PokedexButton from "./PokedexButton"
import { PokemonContexto } from "./PokemonProvedor"


const PokedexCard = ({id, nome, imagem, capturado=false}) => {

    const {capturarPokemon} = useContext(PokemonContexto)

    function renderizarBotao(){
        if (!capturado)
            return (<PokedexButton
                titulo="Capturar"
                acao={() => {
                                capturarPokemon({id,nome,imagem})
                                alert(`Pokemon ${nome} capturado!`)
                            }
                }
            />)
        return
    }

    return (
        <View style={estilos.card}>
            <PokedexLabel nome={nome} />
            <Image
                style={estilos.imagem}
                source={
                   {uri: imagem} 
                }
            />
            
            {renderizarBotao()}
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
        alignSelf: "flex-start",
        margin: 3,
        
    },
    imagem: {
        width: 100,
        height: 100,
        marginBottom: 5
    }
})

export default PokedexCard