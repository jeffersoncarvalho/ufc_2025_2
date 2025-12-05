const PokemonModel = require("../models/PokemonModel")

//simulando uma tabela de pokemons numa base de dados real
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
        habilidades: ["planta", "água"]
    }),
    new PokemonModel({
        id: 4,
        nome: "Charmander",
        habilidades: ["fogo"]
    }),
    new PokemonModel({
        id: 5,
        nome: "Charmaleon",
        habilidades: ["fogo"]
    }),
    new PokemonModel({
        id: 6,
        nome: "Charizard",
        habilidades: ["fogo", "voar"]
    }),
    new PokemonModel({
        id: 7,
        nome: "Squirtle",
        habilidades: ["água"]
    }),
    new PokemonModel({
        id: 8,
        nome: "Wartortle",
        habilidades: ["água"]
    }),
    new PokemonModel({
        id: 9,
        nome: "Blastoise",
        habilidades: ["água"]
    }),
    new PokemonModel({
        id: 10,
        nome: "Caterpie",
        habilidades: ["inseto"]
    }),
    new PokemonModel({
        id: 11,
        nome: "Metapod",
        habilidades: ["inseto"]
    }),
    new PokemonModel({
        id: 12,
        nome: "Butterfree",
        habilidades: ["inseto", "voar"]
    })



]

class PokemonRepository {

    async findAll() {
        return Promise.resolve(pokemons)
    }

    findById(id) {

    }
}

module.exports = PokemonRepository