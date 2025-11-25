import { SafeAreaView } from "react-native-safe-area-context"
//import HelloWorld from "./components/aula_01/HelloWorld";
//import MeuIMC from "./components/aula_02/MeuIMC";
import PokedexLabel from "./components/aula_03/PokedexLabel";

export default function App() {
  return (
    <SafeAreaView>
      <PokedexLabel label = "Bulbasaur" />
    </SafeAreaView>
    
  );
}

