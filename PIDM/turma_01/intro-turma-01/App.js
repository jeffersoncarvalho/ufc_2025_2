import { NavigationContainer } from "@react-navigation/native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { createStackNavigator } from "@react-navigation/stack"

import MenuPrincipalScreen from "./components/aula_07/MenuPrincipalScreen"

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
                    <Stack.Screen name="MenuPrincipal" component={MenuPrincipalScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

export default App