import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//import OlaMundo from './components/aula_01/OlaMundo';
//import OlaMundoComEstilo from './components/aula_02/OlaMundoComEstilo';
//import OlaMundoSafeArea from "./components/aula_03/OlaMundoSafeArea";
//import CalculadoraIMC from "./components/aula_04/CalculadoraIMC";
//import PokedexLabel from "./components/aula_05/PokedexLabel";
//import PokedexButton from "./components/aula_05/PokedexButton";
import PokedexCard from "./components/aula_05/PokedexCard";

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <PokedexCard id={1} nome="Pikachu" />
    </SafeAreaView>
  )
}

/*export default function App() {
  return (
    <View style={styles.container}>
      <OlaMundoSafeArea />
      
      <Text>Jefferson</Text>
      <StatusBar style="auto" />
      
    </View>
  );
}
*/

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
