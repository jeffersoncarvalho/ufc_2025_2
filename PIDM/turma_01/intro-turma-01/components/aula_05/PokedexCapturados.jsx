import { View, Text, FlatList, StyleSheet } from "react-native"
import { useContext} from "react"
import PokedexCard from "./PokedexCard"
import { PokemonContexto } from "./PokemonProvedor"

const PokedexCapturados = () => {
    const {capturados} = useContext(PokemonContexto)

    return (
        <View>
           <FlatList 
                data={capturados}
                renderItem={
                    ({item}) => {
                        return <PokedexCard 
                            id = {item.id}
                            nome = {item.nome}
                            imagem={item.imagem}
                            capturado={true}
                        />
                    }
                }
                numColumns={3}
                contentContainerStyle={estilos.lista}
            />
        </View>
    )
}

const estilos = StyleSheet.create(
    {
        lista: {
            backgroundColor: "red",
            flexDirection: "column",
            alignItems: "center",
        }
    }
)

export default PokedexCapturados