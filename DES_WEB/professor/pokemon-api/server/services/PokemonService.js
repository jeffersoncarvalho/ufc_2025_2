const pokemonRepository = require("../repositories/PokemonRepository")
const PokemonDT0 = require("../dtos/PokemonDTO")

//lógica de negócio e mapeamento
class PokemonService {
    
    async listarTodos () {
        const pokemons = await pokemonRepository.findAll()
        return pokemons.map( pokemon => new PokemonDTO(pokemon) )
    }

    async buscarPorId(id) {
        const pokemon = await pokemonRepository.findById(id)
        if (pokemon) return new PokemonDT0(pokemon)
        else return null
    }
}

module.exports = new PokemonService()