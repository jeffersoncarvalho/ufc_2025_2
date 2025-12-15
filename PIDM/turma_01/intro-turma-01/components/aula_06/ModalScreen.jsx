import { SafeAreaView } from "react-native-safe-area-context"
import {View, Text, Button} from "react-native"
import { useNavigation } from "@react-navigation/native"

import estilos from "./estilos"

const ModalScreen = () => {

    const navigation = useNavigation()

    return (
        <SafeAreaView>
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>Minha Modal</Text>
            <View style={estilos.botoes}>
                <View style={estilos.botao}>
                    <Button title="Voltar"  onPress={()=>navigation.goBack()}/>
                </View>
            </View>
        </View>
        </SafeAreaView>
    )
}

export default ModalScreen