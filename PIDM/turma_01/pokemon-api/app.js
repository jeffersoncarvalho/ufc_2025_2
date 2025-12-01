const express = require("express")
const path = require("path")

const pokemonRouter = require("./routers/PokemonRouter")

const app = express()
const PORT = 3000

app.use(express.static(path.join(__dirname,"..","public")))
app.use("/api/pokemon", pokemonRouter)

app.listen(
    PORT,
    () => {
        console.log(`API rodando em http://localhost:${PORT}`)
    }
)