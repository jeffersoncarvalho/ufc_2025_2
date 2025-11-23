//npx expo install react-native-safe-area-context   
import { SafeAreaView } from "react-native-safe-area-context";
import {View, StyleSheet} from "react-native"
import { TextComponent } from "./04_TextComponent";

export const HelloWorld = () => {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <TextComponent content="React"/>
                <TextComponent content="Native"/>
                <TextComponent content="Reuso"/>
                <View style={styles.box}></View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
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
    box: {
        width: 30,
        height: 30,
        backgroundColor: "red",
    }
})

