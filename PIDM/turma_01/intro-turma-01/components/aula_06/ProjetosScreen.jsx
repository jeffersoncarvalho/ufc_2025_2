import { SafeAreaView } from "react-native-safe-area-context"
import {View, Text, Button} from "react-native"

import estilos from "./estilos"

const ProjetosScreen = () => {
    return (
        <SafeAreaView>
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>Projetos</Text>
            <View style={estilos.botoes}>
                <View style={estilos.botao}>
                    <Button title="Voltar" />
                </View>
            </View>
        </View>
        </SafeAreaView>
    )
}

export default ProjetosScreen