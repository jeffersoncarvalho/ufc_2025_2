import { SafeAreaProvider } from "react-native-safe-area-context"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import HomeScreen from "./components/aula_06/HomeScreen"
import PerfilScreen from "./components/aula_06/PerfilScreen"
import ProjetosScreen from "./components/aula_06/ProjetosScreen"
import ContatosScreen from "./components/aula_06/ContatosScreen"

import ModalScreen from "./components/aula_06/ModalScreen"
import TesteScreen from "./components/aula_06/TesteScreen"

const Stack = createStackNavigator()

const App = () => {

    return (
        <SafeAreaProvider>
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={
                    {headerShown:false}
                }
                initialRouteName="Home"
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Perfil" component={PerfilScreen} />
                <Stack.Screen name="Projetos" component={ProjetosScreen} />
                <Stack.Screen name="Contatos" component={ContatosScreen} />
                <Stack.Screen name="Teste" component={TesteScreen} />
                <Stack.Screen 
                    name="Curiosidades" 
                    component={ModalScreen} 
                    options={
                        {
                            presentation: "modal",
                            headerShown: false,
                            animation: "slide_from_bottom"
                        }
                    }
                />
            </Stack.Navigator>
        </NavigationContainer>
        </SafeAreaProvider>
        
    )
}

export default App