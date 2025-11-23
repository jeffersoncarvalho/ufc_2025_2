import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
//import HelloWorld from './components/aula_01/01_HelloWorld';
//import HelloWorld from './components/aula_01/02_HelloWorld';
//import { HelloWorld } from "./components/aula_01/03_HelloWorld";
//import { HelloWorld } from "./components/aula_01/04_HelloWorld/04_HelloWorld";
//import { AppContainer } from "./components/aula_01/05_Props/05_AppContainer";
//import PokedexButton from "./components/aula_02/PokedexButton";
//import PokedexButtonPressable from "./components/aula_02/PokedexButtonPressable";
//import PokedexCard from "./components/aula_02/PokedexCard";
import PokedexMain from "./components/aula_02/PokedexMain";

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <PokedexMain />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    safeAreaView: {
        backgroundColor:"#FFF",
        flex: 1,
    }
})

