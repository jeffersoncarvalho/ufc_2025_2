import { View, FlatList, StyleSheet, Image } from "react-native";
import { useState, useEffect } from "react";

import PokedexCard from "./PokedexCard";

/*const pokemons = [
  { name: "bulbasaur", id: 1 },
  { name: "ivysaur", id: 2 },
  { name: "venusaur", id: 3 },
  { name: "charmander", id: 4 },
  { name: "charmeleon", id: 5 },
  { name: "charizard", id: 6 },
  { name: "squirtle", id: 7 },
  { name: "wartortle", id: 8 },
  { name: "blastoise", id: 9 },
  { name: "caterpie", id: 10 },
];*/

const PokedexMain = () => {

  const [pokemons, setPokemons] = useState([])
  useEffect(
    () => {
      carregarPokemons()
    }
    ,
    []
  )

  async function carregarPokemons() {
    try {
      const response = await fetch("http://172.25.250.154:3000/api/pokemon")
      const data = await response.json()
      setPokemons(data)
    }catch(error) {
      console.log(error)
    }
    
  }

  return (
    <View style={estilos.container}>
      
      {/*<View style={estilos.logo}>
        <Image 
          source={require("./imagens/logo.png")}
          style={{width: 270, height: 100}}
        />
      </View>*/}
      
      <FlatList
        data={pokemons}
        keyExtractor={(pokemon) => pokemon.id}
        renderItem={({ item }) => {
          return <PokedexCard 
                    id={item.id} 
                    nome={item.nome} 
                    imagem={item.imagem}
                    habilidades={item.habilidades} 
                  />;
        }}
        contentContainerStyle={estilos.lista}
        numColumns={3} 
      />
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "beige",
    flex: 1,
    borderBottomWidth: 5,
    borderBottomColor: "orange"
  },
  logo: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
    backgroundColor: "lightblue",
    borderBottomColor: "orange",
    borderBottomWidth: 5,
    borderTopColor: "orange",
    borderTopWidth: 5
  },
  lista: {
    justifyContent: "center"
  }
});

export default PokedexMain;
