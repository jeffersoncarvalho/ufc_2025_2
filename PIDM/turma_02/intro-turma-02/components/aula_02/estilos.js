import {StyleSheet} from "react-native"

const estilos = StyleSheet.create({
    container: {
        backgroundColor: "antiquewhite",
        flex: 1,
        padding: 30,
        gap: 15
        
    },
    header: {
        backgroundColor: "white",
        borderColor: "#c0c0c0",
        borderWidth: 3,
        borderRadius: 8,

        padding: 15,
        flexDirection: "column",
        alignItems: "center"
    },
    texto: {
        fontSize: 20,
        fontWeight: "bold"
    },
    form: {
        backgroundColor: "white",
        borderColor: "#c0c0c0",
        borderWidth: 3,
        borderRadius: 8,
        padding: 15,
        gap: 15

    },
    textoInput: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 6,
        paddingLeft: 15,
        fontSize: 15
    }    
})

export default estilos