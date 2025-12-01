const express = require("express")
const pokemonService = require("../services/PokemonService")

const router = express.Router()

//buscar todos
router.get(
    "/",
    async (request, response) => {
        try {
            const pokemons = await pokemonService.listarTodos()
            response.json(pokemons)
        }catch(error){
            console.log(error)
            response.status(500).json({"erro":"Problema interno no servidor!"})
        }
    }
)

//buscar por id
//router.get()

module.exports = router