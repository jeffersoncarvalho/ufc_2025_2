import {View, Text} from "react-native"
import { PokemonContext } from "./PokemonProvider"
import { useContext } from "react"

const PokedexCaptured = () => {

    const {capturados} = useContext(PokemonContext)

    return (
        <View>
            {console.log(capturados)}
            <Text>Capturados</Text>
        </View>
    )
}

export default PokedexCaptured