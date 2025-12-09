import { useState, createContext } from "react"

//criando o contexto que serve para compartilhar variáveis de estado
//e até funções
const PokemonContexto = createContext(null)

//o provedor disponibiliza o contexto para outros componentes
const PokemonProvedor = (props) => {

    //quero compartilhar essa variável de estado "capturados"
    const [capturados, setCapturados] = useState([])

    //quero compartilhar essa função que modifica a variável de estado
    function capturarPokemon(pokemon) {
        setCapturados((estadoAnterior) => [...estadoAnterior, pokemon])
    }

    return (
        <PokemonContexto.Provider value={{capturados, capturarPokemon}}>
            {props.children}
            
        </PokemonContexto.Provider>
    )
}

export {PokemonContexto, PokemonProvedor}