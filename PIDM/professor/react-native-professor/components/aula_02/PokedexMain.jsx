import { View, FlatList, StyleSheet } from "react-native";
import PokedexCard from "./PokedexCard";

const pokemons = [
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
];

const PokedexMain = () => {
  return (
    <View style={estilos.container}>
      <FlatList
        
        data={pokemons}
        keyExtractor={(pokemon) => pokemon.id}
        renderItem={({ item }) => {
          return <PokedexCard id={item.id} nome={item.name} />;
        }}
        contentContainerStyle={estilos.lista}
      />
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "beige",
  },
  lista: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    justifyContent: "center",
    paddingTop: 10
  }
});

export default PokedexMain;
