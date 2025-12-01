const express = require("express")
const path = require("path")

const pokemonRouter = require("./controllers/PokemonController")

const app = express()
const PORT = 3000

app.use(express.static(path.join(__dirname,"..","public")))
app.use("/api/pokemons", pokemonRouter)
app.listen(
    PORT,
    () => {
        console.log(`API execudando em http://localhost:${PORTS}`)
    }
)