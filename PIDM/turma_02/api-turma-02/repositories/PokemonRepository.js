//import PokemonModel from "../models/PokemonModel"
const PokemonModel = require("../models/PokemonModel")

//EMULANDO UMA BASE DE DADOS
const pokemons = [
    new PokemonModel({id:1, nome:"Bulbasaur", habilidades:["planta","água"]}),
    new PokemonModel({id:2, nome:"Ivysaur", habilidades:["planta","água"]}),
    new PokemonModel({id:3, nome:"Venasaur", habilidades:["planta","água"]}),
    new PokemonModel({id:4, nome:"Chamander", habilidades:["planta","água"]}),
    new PokemonModel({id:5, nome:"Charmeleon", habilidades:["planta","água"]}),
    new PokemonModel({id:6, nome:"Charizard", habilidades:["planta","água"]}),
    new PokemonModel({id:7, nome:"Squirtle", habilidades:["planta","água"]}),
    new PokemonModel({id:8, nome:"Wartotle", habilidades:["planta","água"]}),
    new PokemonModel({id:9, nome:"Blastoise", habilidades:["planta","água"]}),
]
//FIM DO EMULANDO

//Responsável em oferecer as funções que acessam a tabela Pokemon
class PokemonRepository {

    async findAll() {
        return Promise.resolve(pokemons)
    }

    //vários outros serviços de acesso à base de dados...
}

//retornando a classe!
module.exports = PokemonRepository