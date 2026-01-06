//import { SafeAreaView } from "react-native-safe-area-context"
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons" 
//import Ionicons from "react-native-vector-icons/Ionicons";

import PokedexMain from "./components/aula_03/PokedexMain";
import PokedexPokebola from "./components/aula_03/PokedexPokebola";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Pokedex"
        screenOptions={({ route }) => ({
          tabBarShowIcon: true,
          tabBarLabelStyle: { fontSize: 12 },

          // Qual ícone cada tab usa:
          tabBarIcon: ({ focused }) => {
            let iconName = "";

            switch (route.name) {
              case "Pokedex":
                iconName = focused ? "home" : "home-outline";
                break;
              case "Pokebola":
                iconName = focused ? "ban" : "ban-outline";
                break;
            }

            return (
              <Ionicons
                name={iconName}
                size={20}
                color={focused ? "#007AFF" : "#555"}
              />
            );
          },
        })}
      >
        <Tab.Screen name="Pokedex" component={PokedexMain} />
        <Tab.Screen name="Pokebola" component={PokedexPokebola} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
