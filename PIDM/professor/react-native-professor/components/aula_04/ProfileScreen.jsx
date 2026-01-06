import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"
import {View, Button, Text} from "react-native"
import estilos from "./estilos"

const ProfileScreen = () => {
    const navigation = useNavigation()

    return (
        <SafeAreaView>
        <View style={estilos.container}>
            <Text style={estilos.header}>Perfil</Text>
          
            <View style={estilos.buttons}>
                <View style={estilos.button}>
                    <Button title="Curiosidades" onPress={()=>navigation.navigate("Curiosidades")}/>
                </View>
                <View style={estilos.button}>
                    <Button title="Voltar" onPress={()=>navigation.goBack()}/>
                </View>
            </View>
        </View>
        </SafeAreaView>
    )
}

export default ProfileScreen