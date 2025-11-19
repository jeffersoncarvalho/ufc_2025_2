import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//import OlaMundo from './components/aula_01/OlaMundo';
//import OlaMundoComEstilo from './components/aula_02/OlaMundoComEstilo';
//import OlaMundoSafeArea from "./components/aula_03/OlaMundoSafeArea";
import CalculadoraIMC from "./components/aula_04/CalculadoraIMC";

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <CalculadoraIMC />
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
