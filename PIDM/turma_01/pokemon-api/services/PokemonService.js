const PokemonRepository = require("../repositories/PokemonRepository")
const PokemonDTO = require("../dtos/PokemonDTO")

//lógica de negócio
//mapeamento de model -> dto
class PokemonService {

    constructor() {
        this.pokemonRepository = new PokemonRepository()
    }
    
    async listarTodos() {

        const pokemons = await this.pokemonRepository.findAll()
        return pokemons.map((pokemon) => new PokemonDTO(pokemon))

    }

    buscarPorId(id) {

    }

}

//exportando como objeto!
module.exports = new PokemonService()