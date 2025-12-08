import { useState, createContext } from "react"

const PokemonContext = createContext(null)

const PokemonProvider = ({children}) => {
    const [capturados, setCapturados] = useState([])

    const capturarPokemon = (pokemon) => {
        setCapturados( prevCapturados => [ ...prevCapturados, pokemon])
    }

    return (
        <PokemonContext.Provider value={{capturados, capturarPokemon}}>
            {children}
        </PokemonContext.Provider>
    )
}

export { PokemonProvider, PokemonContext }