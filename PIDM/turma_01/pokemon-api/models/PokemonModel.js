const PATH_IMAGEM = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
//const PATH_IMAGEM = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"
//const PATH_IMAGEM = "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/"
class PokemonModel {

    constructor({id, nome, habilidades}) {
        this.id = id
        this.nome = nome
        this.habilidades = habilidades
        this.imagem = `${PATH_IMAGEM}${this.id}.png`
        //this.imagem = PATH_IMAGEM + this.id + ".svg"
        /*if( this.id > 0 && this.id < 10) {
            this.imagem = `${PATH_IMAGEM}00${this.id}.png`
        }else if (this.id < 100) {
            this.imagem = `${PATH_IMAGEM}0${this.id}.png`
        }else this.imagem = ""*/
        //variáveis de instância que não interessam para a interface gráfica
        this.dataDeCriacao = new Date()
        this.status = "ATIVADO"
    }

}

module.exports = PokemonModel