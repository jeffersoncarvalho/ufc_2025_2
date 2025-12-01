const PokemonModel = require("../models/PokemonModel")

//dados em memória
const pokemons = [
  new PokemonModel({
    id: 1,
    nome: "Bulbasaur",
    habilidades: ["planta", "veneno"],
  }),
  new PokemonModel({
    id: 2,
    nome: "Ivysaur",
    habilidades: ["planta", "veneno"],
  }),
  new PokemonModel({
    id: 3,
    nome: "Venusaur",
    habilidades: ["planta", "veneno"],
  }),
  new PokemonModel({
    id: 4,
    nome: "Charmander",
    habilidades: ["planta", "veneno"],
  }),
  new PokemonModel({
    id: 5,
    nome: "Charmaleon",
    habilidades: ["planta", "veneno"],
  }),
  new PokemonModel({
    id: 6,
    nome: "Charizard",
    habilidades: ["planta", "veneno"],
  }),
  new PokemonModel({
    id: 7,
    nome: "Squirtle",
    habilidades: ["planta", "veneno"],
  }),
  new PokemonModel({
    id: 8,
    nome: "Wartortle",
    habilidades: ["planta", "veneno"],
  }),
  new PokemonModel({
    id: 9,
    nome: "Blastoise",
    habilidades: ["planta", "veneno"],
  }),
  new PokemonModel({
    id: 10,
    nome: "Caterpie",
    habilidades: ["planta", "veneno"],
  }),
  new PokemonModel({
    id: 11,
    nome: "Metapod",
    habilidades: ["planta", "veneno"],
  }),
];

class PokemonRepository {
  //async pra simular o acesso ao BD
  async findAll() {
    return Promise.resolve(pokemons);
  }

  async findById(id) {
    const pokemon = pokemons.find((pokemon) => pokemon.id == id);
    if (pokemon) return Promise.resolve(pokemon);
    return Promise.resolve(null);
  }
}

module.exports = new PokemonRepository();
