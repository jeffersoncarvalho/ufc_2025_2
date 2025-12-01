const pokemonRepository = require("../repositories/PokemonRepository")
const PokemonDTO = require("../dtos/PokemonDTO")

//responsável pelo mapeamento de Model -> DTO
//responsável pela lógica de negócio
class PokemonService {

    async listarTodos() {
        const pokemons = await pokemonRepository.findAll()
        //vou ter códido que depende da linha de cima
        return pokemons.map((pokemon) => new PokemonDTO(pokemon))
    }

    async buscarPorId(id) {
        const pokemonEncontrado = pokemonRepository(id)
        if (pokemonEncontrado) return new PokemonDTO(pokemonEncontrado)
        else return null
    }
}

module.exports = new PokemonService