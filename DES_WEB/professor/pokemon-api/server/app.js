const express = require("express")
const path = require("path")
const pokemonRouter = require("./controllers/PokemonController")

const app = express()
const port = 3000

// servir arquivos estáticos (index.html)
app.use(express.static(path.join(__dirname, "..", "public")));

// rotas da API
app.use("/api/pokemons", pokemonRouter);

// fallback (opcional)
app.use((req, res) => {
  res.status(404).json({ erro: "Rota não encontrada" });
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});