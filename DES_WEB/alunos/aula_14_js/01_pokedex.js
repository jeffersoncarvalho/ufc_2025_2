async function carregarPokemons() {
    const response = await fetch("http://localhost:3000/api/pokemons/listarTodos")
    const pokemons = await response.json()
    const pokemonContainerDiv = document.getElementById("pokemon-container") 
    pokemons.forEach(
        
    )
    
}

carregarPokemons()