import {StyleSheet} from "react-native"

const estilos = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "antiquewhite",
        padding: 20,
        alignItems: "center",
        gap: 20,
    },
    header: {
        borderWidth: 2,
        borderRadius: 8,
        borderColor: "#c0c0c0",

        padding: 10,
        backgroundColor: "white",
        width: "90%",

        alignItems: "center"
    },
    texto: {
        fontSize: 20,
        fontWeight: "bold"
    },
    form: {
        borderWidth: 2,
        borderRadius: 8,
        borderColor: "#c0c0c0",
        backgroundColor: "white",

        padding: 15,
        width: "90%"
    },
    textoInput: {
        borderWidth: 1,
        borderRadius: 6,
        borderColor: "#c0c0c0",

        padding: 15,
        fontSize: 20, 
    },
    resultado: {
        borderWidth: 2,
        borderRadius: 8,
        borderColor: "#c0c0c0",
        backgroundColor: "white",

        padding: 15,
        width: "90%"
    }

})

export default estilos