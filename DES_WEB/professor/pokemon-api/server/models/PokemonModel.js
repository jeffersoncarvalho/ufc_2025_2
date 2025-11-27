const pathImagem = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"
class PokemonModel {
    constructor({ id, nome, habilidades}) {
        
        this.id = id
        this.nome = nome
        this.habilidades = habilidades
        this.imagem = `${pathImagem}${id}.svg`
        
        //campos que não interessam ao usuário final
        this.dataCriacao = new Date()
        this.statusInterno = "ativo"
    }
}

module.exports = PokemonModel