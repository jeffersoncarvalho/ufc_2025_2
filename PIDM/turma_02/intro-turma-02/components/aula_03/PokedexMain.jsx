const PATH_API = "http://172.25.250.154:3000/api/pokemon/listarPokemons"

import { View, StyleSheet, FlatList} from "react-native"
import { useState } from "react"

import PokedexCard from "./PokedexCard"

const PokedexMain = () => {
    const [pokemons, setPokemons] = useState([])

    return (
        <View>
            <FlatList 
                data = {pokemons}
                renderItem={
                    ({item}) => {
                        return <PokedexCard 
                        />
                    }
                }
            />
        </View>
    )
}

export default PokedexMain