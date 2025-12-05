import { useState, createContext } from "react"

const PokemonContext = createContext(null)

const PokemonProvider = () => {
    const [capturados, setCapturados] = useState([{nome:"pikachu"}])

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