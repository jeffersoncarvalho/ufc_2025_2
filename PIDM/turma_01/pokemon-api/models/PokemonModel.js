const PATH_IMAGEM = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"

class PokemonModel {

    constructor({id, nome, habilidades}) {
        this.id = id
        this.nome = nome
        this.habilidades = habilidades
        this.imagem = `${PATH_IMAGEM}${this.id}.svg`
        //this.imagem = PATH_IMAGEM + this.id + ".svg"

        //variáveis de instância que não interessam para a interface gráfica
        this.dataDeCriacao = new Date()
        this.status = "ATIVADO"
    }

}

module.exports = PokemonModel