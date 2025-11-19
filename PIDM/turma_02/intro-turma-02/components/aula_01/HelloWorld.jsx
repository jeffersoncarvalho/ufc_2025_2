import {View, Text} from "react-native"
import estilos from "./estilos"

const HelloWorld = () => {
    return (
        <View style={estilos.container}>
            <Text style={estilos.texto}>Hello World React Native!</Text>
        </View>
    )
}

export default HelloWorld