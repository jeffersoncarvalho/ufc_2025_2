import { SafeAreaProvider } from "react-native-safe-area-context"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import HomeScreen from "./components/aula_04/HomeScreen"
import ProfileScreen from "./components/aula_04/ProfileScreen"
import ContactScreen from "./components/aula_04/ContactScreen"
import ProjectScreen from "./components/aula_04/ProjectScreen"
import ModalScreen from "./components/aula_04/ModalScreen"

const Stack = createStackNavigator()

export default function App() {
    return(
        <SafeAreaProvider>
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Perfil" component={ProfileScreen}/>
                <Stack.Screen name="Projetos" component={ProjectScreen}/>
                <Stack.Screen name="Contatos" component={ContactScreen}/>

                <Stack.Screen 
                    name="Curiosidades" 
                    component={ModalScreen}
                    options={{
                        presentation:"card",
                        headerShown:false,
                        animation:"slide_from_bottom"
                    }}
                    />

            </Stack.Navigator>
        </NavigationContainer>
        </SafeAreaProvider>
    )
}