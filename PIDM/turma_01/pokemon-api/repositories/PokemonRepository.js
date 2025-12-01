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