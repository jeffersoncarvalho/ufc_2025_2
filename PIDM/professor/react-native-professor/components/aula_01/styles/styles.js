import { StyleSheet } from "react-native";

/*export*/ const styles = StyleSheet.create({
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
    
})

const stylesBox = StyleSheet.create({
    box: {
        width: 30,
        height: 30,
        backgroundColor: "purple",
    }
})

export {styles,stylesBox}

