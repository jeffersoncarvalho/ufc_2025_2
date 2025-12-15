import { SafeAreaProvider } from "react-native-safe-area-context"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import HomeScreen from "./components/aula_06/HomeScreen"
import PerfilScreen from "./components/aula_06/PerfilScreen"
import ProjetosScreen from "./components/aula_06/ProjetosScreen"
import ContatosScreen from "./components/aula_06/ContatosScreen"

const Stack = createStackNavigator()

const App = () => {

    return (
        <SafeAreaProvider>
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={
                    {headerShown:false}
                }
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Perfil" component={PerfilScreen} />
                <Stack.Screen name="Projetos" component={ProjetosScreen} />
                <Stack.Screen name="Contatos" component={ContatosScreen} />
                
            </Stack.Navigator>
        </NavigationContainer>
        </SafeAreaProvider>
        
    )
}

export default App