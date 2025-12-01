class PokemonDTO {
    constructor({id, nome, imagem, habilidades}) {
        this.id = id
        this.nome = nome
        this.imagem = imagem
        this.habilidades = habilidades
    }
}

module.exports = PokemonDTO