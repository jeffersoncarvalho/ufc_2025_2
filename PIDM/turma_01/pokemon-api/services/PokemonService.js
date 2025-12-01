const PokemonRepository = require("../repositories/PokemonRepository")

//lógica de negócio
class PokemonService {

    constructor() {
        this.pokemonRepository = new PokemonRepository()
    }
    
    async listarTodos() {

        const pokemons = await this.pokemonRepository.findAll()
        return pokemons

    }

    buscarPorId(id) {

    }

}

//exportando como objeto!
module.exports = new PokemonService()