import {View, Text, StyleSheet} from "react-native"

const HelloWorld = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>React Native com Estilos!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#C0C0C0",
        width: "100%",
        height: "100%",
        marginTop: 30,
        marginBottom: 20,
    },
    text: {
        color: "#FF0000",
        fontSize: 20,
        fontStyle: "bold"
    }
})

export default HelloWorld