import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons'

//import HelloWorld from './components/aula_01/01_HelloWorld';
//import HelloWorld from './components/aula_01/02_HelloWorld';
//import { HelloWorld } from "./components/aula_01/03_HelloWorld";
//import { HelloWorld } from "./components/aula_01/04_HelloWorld/04_HelloWorld";
//import { AppContainer } from "./components/aula_01/05_Props/05_AppContainer";
//import PokedexButton from "./components/aula_02/PokedexButton";
//import PokedexButtonPressable from "./components/aula_02/PokedexButtonPressable";
//import PokedexCard from "./components/aula_02/PokedexCard";
//import PokedexMain from "./components/aula_02/PokedexMain";

import PokedexMain from "./components/aula_03/PokedexMain";
import PokedexCaptured from "./components/aula_03/PokedexCaptured";

import { PokemonProvider } from "./components/aula_03/PokemonProvider";

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <PokemonProvider>
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Pokedex"
        screenOptions={({ route }) => ({
          tabBarShowIcon: true,
          tabBarLabelStyle: { fontSize: 12 },

          // Estilo da barra superior
          tabBarStyle: {
            backgroundColor: '#fff',
          },

          // Qual ícone cada tab usa: --------------------------------------
          tabBarIcon: ({ focused }) => {
            let iconName = '';

            switch (route.name) {
              case 'Pokedex':
                iconName = focused ? 'home' : 'home-outline';
                break;
              case 'Pokebola':
                iconName = focused ? 'call' : 'call-outline';
                break;
            }

            return <Ionicons name={iconName} size={20} color={focused ? '#007AFF' : '#555'} />;
          },

          // Cor da linha indicadora de aba ativa
          tabBarIndicatorStyle: { backgroundColor: '#007AFF' },
        })}
      >
        <Tab.Screen name="Pokedex" component={PokedexMain} />
        <Tab.Screen name="Pokebola" component={PokedexCaptured} />
      </Tab.Navigator>
    </NavigationContainer>
    </PokemonProvider>
  );
}

const styles = StyleSheet.create({
    safeAreaView: {
        //backgroundColor:"#FFF",
        backgroundColor: "beige",
        flex: 1,
    }
})

