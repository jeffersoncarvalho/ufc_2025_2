const pokemons = [
    {id:"001", nome: "Bulbasaur"},
    {id:"002", nome: "Ivysaur"},
    {id:"003", nome: "Venusaur"},
    {id:"004", nome: "Charmander"},
    {id:"005", nome: "Charmeleon"},
    {id:"006", nome: "Charizard"},
    {id:"007", nome: "Squirtle"},
    {id:"008", nome: "Wartotle"},
    {id:"009", nome: "Blastoise"},
    {id:"010", nome: "Caterpie"},
]

const url_imagem = "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/"

let id_inicial = pokemons[0].id
let nome_inicial = pokemons[0].nome


function iniciar() {
    let pokemon_nome_tag = document.getElementById("pokemon_nome")
    pokemon_nome_tag.innerHTML = nome_inicial

    let pokemon_tag_imagem = document.getElementById("pokemon_imagem")
    pokemon_tag_imagem.src = `${url_imagem}${id_inicial}.png`
}

function btn_voltar() {
    alert("VOLTAR")
}

function btn_avancar() {
    alert("AVANÇAR")
}

iniciar()