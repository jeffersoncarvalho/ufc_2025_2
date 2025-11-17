//npx expo install react-native-safe-area-context   
import { SafeAreaView } from "react-native-safe-area-context";
import {View, Text, StyleSheet} from "react-native"
import { styles, stylesBox } from "./styles/styles";

export const HelloWorld = () => {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <Text style={styles.text}>React </Text>
                <Text style={styles.text}>React </Text>
                <Text style={styles.text}>React </Text>
                <View style={stylesBox.box}></View>
            </View>
        </SafeAreaView>
    )
}

/*const styles = StyleSheet.create({
    safeAreaView: {
        backgroundColor:"#FFF",
        flex: 1,
    },
    container: {
        backgroundColor: "#C0C0C0",
        display: "flex",
        flex: 1,
        padding: 20,
    },
    text: {
        fontSize: 15,
        fontWeight: "bold"
    },
    box: {
        width: 30,
        height: 30,
        backgroundColor: "red",
    }
})*/

