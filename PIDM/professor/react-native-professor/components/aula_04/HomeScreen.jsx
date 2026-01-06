import {View, Button, Text} from "react-native"
import estilos from "./estilos"
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"

const HomeScreen = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView>
        <View style={estilos.container}>
            <Text style={estilos.header}>Home</Text>
            <View style={estilos.buttons}>
                <View style={estilos.button}>
                    <Button title="Ver Perfil" onPress={()=>navigation.navigate("Perfil")}/>
                </View>
                <View style={estilos.button}>
                    <Button title="Ver Projetos Pessoais" onPress={()=>navigation.navigate("Projetos")}/>
                </View>
                <View style={estilos.button}>
                    <Button title="Ver Contatos" onPress={()=>navigation.navigate("Contatos")}/>
                </View>
            </View>
        </View>
        </SafeAreaView>
    )
}

export default HomeScreen