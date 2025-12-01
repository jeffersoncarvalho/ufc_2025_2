const PATH_IMAGEM = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"

class PokemonModel {

    constructor({id, nome, habilidades}) {
        this.id = id
        this.nome = nome
        this.imagem = `${PATH_IMAGEM}${id}.svg`
        this.habilidades = habilidades

        //campos que não interessam ao usuário final
        this.dataCriacao = new Date()
        this.statusInterno = "ATIVO"
    }

}

module.exports = PokemonModel