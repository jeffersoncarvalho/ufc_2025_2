const PokemonModel = require("../models/PokemonModel")

const pokemons = [
    new PokemonModel({
        id: 1,
        nome: "Bulbasaur",
        habilidades: ["planta", "veneno"]
    }),
    new PokemonModel({
        id: 2,
        nome: "Ivysaur",
        habilidades: ["planta", "veneno"]
    }),
    new PokemonModel({
        id: 3,
        nome: "Venasaur",
        habilidades: ["planta", "veneno"]
    })
]

class PokemonRepository {

    //retorna TODOS os pokemons!
    async findAll() {
        //simula o acesso remoto
        return Promise.resolve(pokemons)
    }

    //retorna apenas aqueles por id
    async findById(id) {
        const pokemon = pokemons.find( (pokemon) => pokemon.id == id)
        if (pokemon) return Promise.resolve(pokemon)
        return Promise.resolve(null)
    }

}

module.exports = new pokemonRepository()