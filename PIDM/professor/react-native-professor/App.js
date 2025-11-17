import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
//import HelloWorld from './components/aula_01/01_HelloWorld';
//import HelloWorld from './components/aula_01/02_HelloWorld';
//import { HelloWorld } from "./components/aula_01/03_HelloWorld";
//import { HelloWorld } from "./components/aula_01/04_HelloWorld/04_HelloWorld";
import { AppContainer } from "./components/aula_01/05_Props/05_AppContainer";

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <AppContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    safeAreaView: {
        backgroundColor:"#FFF",
        flex: 1,
    }
})

