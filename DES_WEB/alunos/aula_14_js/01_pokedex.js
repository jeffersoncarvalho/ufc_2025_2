async function carregarPokemons() {
    const response = await fetch("http://172.25.250.154:3000/api/pokemons/listarTodos")
    const pokemons = await response.json()
    const pokemonContainerDiv = document.getElementById("pokemon-container") 
    pokemons.forEach(
        (pokemon) => {
            const pokemonCardDiv = document.createElement("div")
            pokemonCardDiv.classList.add("site-card")
            pokemonCardDiv.classList.add("bumpable")

            let pokemonCardDivHTML = "" //HTML STRING
            pokemonCardDivHTML += `<h2 id='pokemon_nome'>${pokemon.nome}</h2>`
            pokemonCardDivHTML += `<img
                                    id = 'pokemon-imagem'
                                    src= '${pokemon.imagem}'
                                    />`
            pokemonCardDivHTML += `<div class="site-card-buttons">
                <button onclick="btn_voltar()">Capturar</button>
                </div>`
            pokemonCardDiv.innerHTML = pokemonCardDivHTML
            pokemonContainerDiv.appendChild(pokemonCardDiv)
        }
    )
    
}

carregarPokemons()