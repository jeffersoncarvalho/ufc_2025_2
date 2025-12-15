import { SafeAreaView } from "react-native-safe-area-context"
import {View, Text, Button} from "react-native"

import estilos from "./estilos"

const PerfilScreen = () => {
    return (
        <SafeAreaView>
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>Perfil</Text>
            <View style={estilos.botoes}>
                <View style={estilos.botao}>
                    <Button title="Curiosidades" />
                </View>
                <View style={estilos.botao}>
                    <Button title="Voltar" />
                </View>
            </View>
        </View>
        </SafeAreaView>
    )
}

export default PerfilScreen