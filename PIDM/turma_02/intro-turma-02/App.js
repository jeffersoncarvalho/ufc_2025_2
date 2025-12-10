//import { SafeAreaView } from "react-native-safe-area-context"
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PokedexMain from "./components/aula_03/PokedexMain";
import PokedexPokebola from "./components/aula_03/PokedexPokebola";

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Pokédex"
      >
        <Tab.Screen name="Pokédex" component={PokedexMain}/>
        <Tab.Screen name="Pokebola" component={PokedexPokebola}/>
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}

