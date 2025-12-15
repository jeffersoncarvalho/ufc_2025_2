import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PokedexMain from "./components/aula_05/PokedexMain";
import PokedexCapturados from "./components/aula_05/PokedexCapturados";

import { PokemonProvedor } from "./components/aula_05/PokemonProvedor";

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    
      <PokemonProvedor>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Pokédex"
          >
            <Tab.Screen name="Pokédex" component={PokedexMain}/>
            <Tab.Screen name="Pokebola" component={PokedexCapturados}/>
          </Tab.Navigator>
        </NavigationContainer>
      </PokemonProvedor>

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
