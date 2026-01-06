import { SafeAreaProvider } from "react-native-safe-area-context"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

//telas
import MenuPrincipal from "./components/aula_04/MenuPrincipalScreen"
import PerfilScreen from "./components/aula_04/PerfilScreen"
import ProjetosScreen from "./components/aula_04/ProjetosScreen"
import MeusContatosScreen from "./components/aula_04/MeusContatosScreen"
import MeuModal from "./components/aula_04/MeuModal"

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
                    <Stack.Screen name="Home" component={MenuPrincipal} />
                    <Stack.Screen name="Perfil" component={PerfilScreen} />
                    <Stack.Screen name="Projetos" component={ProjetosScreen} />
                    <Stack.Screen name="Contatos" component={MeusContatosScreen} />
                    <Stack.Screen 
                        name="MeuModal" 
                        component={MeuModal}
                        options={{
                            presentation:"modal",
                            animation:"fade_from_bottom"
                        }} 
                    />
                    
                </Stack.Navigator>
            </NavigationContainer>
            
        </SafeAreaProvider>
    )
}

export default App