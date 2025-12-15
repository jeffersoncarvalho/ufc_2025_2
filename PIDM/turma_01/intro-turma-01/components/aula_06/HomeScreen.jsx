import { SafeAreaView } from "react-native-safe-area-context"
import { useNavigation } from "@react-navigation/native"

import {View, Text, Button} from "react-native"

import estilos from "./estilos"

const HomeScreen = () => {

    const navigation = useNavigation()

    return (
        <SafeAreaView>
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>Tela Principal</Text>
            <View style={estilos.botoes}>
                <View style={estilos.botao}>
                    <Button title="Ver Meu Perfil" onPress={()=>navigation.navigate("Perfil")} />
                </View>
                <View style={estilos.botao}>
                    <Button title="Ver Meus Projetos" onPress={()=>navigation.navigate("Projetos")}/>
                </View>
                <View style={estilos.botao}>
                    <Button title="Entrar em Contato" onPress={()=>navigation.navigate("Contatos")}/>
                </View>
            </View>
        </View>
        </SafeAreaView>
    )
}

export default HomeScreen