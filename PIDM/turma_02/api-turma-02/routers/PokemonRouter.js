//responsável em transformar serviço (Service)
//em rota acessível pelo cliente (browser, app web ou app mobile)
const express = require("express")
const pokemonService = require("../services/PokemonService")

const router = express.Router()

router.get(
    "/listarPokemons",
    async (request, response) => {
        try{
            const pokemonsDtos = await pokemonService.listarTodos()
            response.json(pokemonsDtos)
        }catch(error) {
            console.log(error)
            response.status(500).json({"erro":"Erro no servidor!"})
        }
    }
)
module.exports = router