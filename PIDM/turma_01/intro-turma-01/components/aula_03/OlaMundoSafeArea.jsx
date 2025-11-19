//npx expo install react-native-safe-area-context
import {View, Text} from "react-native"
import estilos from "./estilos"

const OlaMundoSafeArea = () => {
    return (
        <View style={estilos.container}>
            <Text style={estilos.header}>Olá Mundo com Safe Area</Text>
        </View>
    )
}

export default OlaMundoSafeArea
