import { useState, createContext } from "react"

const PokemonContexto = createContext(null)

const PokemonProvedor = (props) => {

    const [capturados, setCapturados] = useState([])

    function capturarPokemon(pokemon) {
        setCapturados((estadoAnterior) => [...estadoAnterior, pokemon])
    }

    return (
        <PokemonContexto.Provider value={{capturados, capturarPokemon}}>
            {props.children}
            
        </PokemonContexto.Provider>
    )
}

export default PokemonProvedor