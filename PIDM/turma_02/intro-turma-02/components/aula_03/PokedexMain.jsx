const PATH_API = "http://172.25.250.154:3000/api/pokemon/listarPokemons"

import { View, StyleSheet, FlatList} from "react-native"
import { useState } from "react"

import PokedexCard from "./PokedexCard"

const PokedexMain = () => {
    const pokemonsTESTE = [{"id":1,"nome":"Bulbasaur","habilidades":["planta","água"],"imagem":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},{"id":2,"nome":"Ivysaur","habilidades":["planta","água"],"imagem":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"},{"id":3,"nome":"Venasaur","habilidades":["planta","água"],"imagem":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"},{"id":4,"nome":"Chamander","habilidades":["planta","água"],"imagem":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},{"id":5,"nome":"Charmeleon","habilidades":["planta","água"],"imagem":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"},{"id":6,"nome":"Charizard","habilidades":["planta","água"],"imagem":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"},{"id":7,"nome":"Squirtle","habilidades":["planta","água"],"imagem":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"},{"id":8,"nome":"Wartotle","habilidades":["planta","água"],"imagem":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"},{"id":9,"nome":"Blastoise","habilidades":["planta","água"],"imagem":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"}]
    const [pokemons, setPokemons] = useState(pokemonsTESTE)

    return (
        <View>
            <FlatList 
                data = {pokemons}
                renderItem={
                    ({item}) => {
                        return <PokedexCard 
                            nome={item.nome}
                            imagem={item.imagem}
                            id={item.id}
                        />
                    }
                }
            />
        </View>
    )
}

export default PokedexMain