const PokemonRepository = require("../repositories/PokemonRepository")
const PokemonDTO = require("../dtos/PokemonDTO")

//faz o mapeamento dos models do repository para os dtos
//interface que o cliente tem interesse
class PokemonService {
    
    constructor() {
        //alocar o objeto em memória principal
        this.pokemonRepository = new PokemonRepository()
    }

    async listarTodos() {
        const pokemons = await this.pokemonRepository.findAll()
    
        const novaLista = pokemons.map( 
            (pokemonModel) => {
                //transformação do model em dto
                return new PokemonDTO(pokemonModel)
            }
        )
        return novaLista
    }
}

//retornando o objeto!
module.exports = new PokemonService()