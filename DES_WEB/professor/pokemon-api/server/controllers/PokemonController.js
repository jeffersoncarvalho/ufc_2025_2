const express = require("express")
const pokemonService = require("../services/PokemonService")

const router = express.Router()

//dev, retirar depois
router.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // ou substitua * por sua origem
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});

//GET /api/pokemons
router.get(
    "/",
    async (request, response) => {
        try {
            const pokemons = await pokemonService.listarTodos()
            response.json(pokemons)
        }catch(error) {
            console.error(error)
            response.status(500).json({erro: "Erro interno no servidor."})
        }
    }
)

// GET /api/alunos/:matricula
router.get(
    "/:id",
    async (request, response) => {
        try {
            const pokemon = await pokemonService.buscarPorId(request.params.id)
            if (pokemon) response.json(pokemon)
            else response.status(404).json({erro: "Pokemon não econtrado."})
        }catch(error) {
            console.error(error)
            response.status(500).json({erro: "Erro interno no servidor!"})
        }
    }
)

module.exports = router