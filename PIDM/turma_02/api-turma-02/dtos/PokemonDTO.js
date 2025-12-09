class PokemonDTO {
    constructor({id, nome, habilidades, imagem}){
        this.id = id
        this.nome = nome
        this.habilidades = habilidades
        this.imagem = imagem
    }
}

//retornando a classe!
module.exports = PokemonDTO