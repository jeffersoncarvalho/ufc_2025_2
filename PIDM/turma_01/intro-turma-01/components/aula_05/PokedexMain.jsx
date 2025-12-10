import { View, StyleSheet, FlatList } from "react-native"
import { useState, useEffect } from "react"
import PokedexCard from "./PokedexCard" 

const PokedexMain = () => {
    
    const [pokemons, setPokemons] = useState([])
    
    useEffect(
        () => {
            //chamada à api remota!
            carregarPokemons()
            
        }
        ,
        []
    )

    async function carregarPokemons() {
        try{
            const response = await fetch("http://172.25.250.154:3000/api/pokemon/")
            const dados = await response.json()
            //atualizar a variável de estado!
            setPokemons(dados)
        }catch(error) {
            console.log(error)
        }
        
    }


    return (
        <View style="estilos.container">
            <FlatList 
                data={pokemons}
                renderItem={
                    ({item}) => {
                        return <PokedexCard 
                            id = {item.id}
                            nome = {item.nome}
                            imagem={item.imagem}
                        />
                    }
                }
                numColumns={3}
                contentContainerStyle={estilos.lista}
            />
        </View>
    )
}

const estilos = StyleSheet.create(
    {
        container: {
            backgroundColor: "beige",
            flex:1,
        }
        ,
        lista: {
            backgroundColor: "red",
            flexDirection: "column",
            alignItems: "center",
        }
    }
)

export default PokedexMain