const express = require("express")
const pokemonService = require("../services/PokemonService")

const router = express.Router()

//pegar todos os pokemons
router.get(
    "/listarTodos",
    async (request, response) => {
        try {
            const pokemons = await pokemonService.listarTodos() 
            response.json(pokemons)
        }catch (error) {
            console.log(error)
            response.status(500).json({"erro": "Error interno no servidor!"})
        }
    }
)

module.exports = router