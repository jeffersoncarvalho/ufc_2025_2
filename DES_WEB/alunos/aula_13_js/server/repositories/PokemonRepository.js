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
    }),
    new PokemonModel({
        id: 4,
        nome: "Charmander",
        habilidades: ["planta", "veneno"]
    }),
    new PokemonModel({
        id: 5,
        nome: "Charmaleon",
        habilidades: ["planta", "veneno"]
    }),
    new PokemonModel({
        id: 6,
        nome: "Charizard",
        habilidades: ["planta", "veneno"]
    }),
    new PokemonModel({
        id: 7,
        nome: "Squirtle",
        habilidades: ["planta", "veneno"]
    }),
    new PokemonModel({
        id: 8,
        nome: "Wartotle",
        habilidades: ["planta", "veneno"]
    }),
    new PokemonModel({
        id: 9,
        nome: "Blastoise",
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

module.exports = new PokemonRepository()