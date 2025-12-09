//inicializa TUDO
const express = require("express")
const path = require("path")

const pokemonRouter = require("./routers/PokemonRouter")

//criando a minha app express que irá subir as rotas!
const app = express()
const PORT = 3000

app.use(express.static(path.join(__dirname,"..","public")))

app.use("/api/pokemon",pokemonRouter)
//http://localhost:3000/api/pokemon/listarPokemons

app.listen(
    PORT,
    () => {
        console.log(`API Rodando na porta ${PORT}`)
    }
)