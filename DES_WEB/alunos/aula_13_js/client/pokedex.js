async function carregarPokemons() {
    const response = await fetch("http://localhost:3000/api/pokemons/listarTodos")
    console.log(response)   
    
}

carregarPokemons()