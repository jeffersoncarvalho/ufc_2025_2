const PATH_IMAGEM = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

class PokemonModel {
    constructor({id, nome, habilidades}) {
       //variáveis de instância (objeto em memória)
       this.id =  id
       this.nome = nome
       this.habilidades = habilidades
       this.imagem = `${PATH_IMAGEM}${this.id}.png`

       //variáveis de instância que NÃO INTERESSAM ao cliente final
       this.dataDeCriacao = new Date()
       this.ativo = true

    }
}

//retornando a classe!
//export default PokemonModel
module.exports = PokemonModel