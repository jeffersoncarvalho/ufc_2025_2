import { Text, StyleSheet } from "react-native"

export const TextComponent = ({content}) => {
    return (
        <Text style={styles.text}>{content}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: "blue",
        fontWeight: "bold",
    }
})