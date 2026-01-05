async function carregarPokemons() {
    const response = await fetch("http://localhost:3000/api/pokemons/listarTodos")
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
                <button onclick='capturarPokemon(${JSON.stringify(pokemon)})'>Capturar</button>
                </div>`
            pokemonCardDiv.innerHTML = pokemonCardDivHTML
            pokemonContainerDiv.appendChild(pokemonCardDiv)
        }
    )
    
}

function capturarPokemon(pokemon){
    //CUIDADO. Ao retirar de uma sessão, você está pegando uma
    //String!
    let pokemons = sessionStorage.getItem("pokemons")
    if (pokemons) {
        //salva o novo pokemon
        pokemons = JSON.parse(pokemons)
        //testar se eu já não o capturei antes!
        const capturado = pokemons.some(elem => elem.id == pokemon.id)
        if(!capturado) {
            pokemons.push(pokemon)
            sessionStorage.setItem("pokemons",JSON.stringify(pokemons))
            console.log(`Pokemon ${pokemon.nome} adicionado!`)
            carregarPokemonsCapturados()
        }else {
            alert(`Pokemon ${pokemon.nome} já capturado!`)
        }
        
    }else {
        //não existe o objeto que representa a lista de pokemons
        //crie um novo
        pokemons = []
        pokemons.push(pokemon)
        sessionStorage.setItem("pokemons", JSON.stringify(pokemons))
        console.log("Sessão 'pokemons' vazia. Criando uma nova!")
        console.log(`Adicionando ${pokemon.nome} à nova sessão.`)
        carregarPokemonsCapturados()
    }
    
}

function carregarPokemonsCapturados() {
    let pokemons = sessionStorage.getItem("pokemons")
    //console.log(pokemons)
    if(pokemons) {
        pokemons = JSON.parse(pokemons)
        const capturadosDiv = document.getElementById("capturados-container")
        //capturadosDiv.innerHTML = ""
        capturadosDiv.replaceChildren()
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
                
                pokemonCardDiv.innerHTML = pokemonCardDivHTML
                capturadosDiv.appendChild(pokemonCardDiv)
            }
        )
    }else {
        console.log("Nenhum Pokemon capturado ainda!")
    }
}

carregarPokemons()
carregarPokemonsCapturados()