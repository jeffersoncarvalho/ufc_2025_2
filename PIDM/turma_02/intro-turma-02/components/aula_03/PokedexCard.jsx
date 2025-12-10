import {View, Image, StyleSheet} from "react-native"
import PokedexLabel from "./PokedexLabel"
import PokedexButton from "./PokedexButton"

const PokedexCard = ({id, nome, imagem}) => {
    return (
        <View style={estilos.card}>
            <Image 
                style={estilos.imagem}
                source={
                    {uri: imagem}
                }
            />
            <PokedexLabel label={nome}/>
            <PokedexButton titulo= "Capturar" acao={() => alert("CAPTURADO!")} />
            
        </View>
    )
}

const estilos = StyleSheet.create({
    card: {
        
        borderWidth: 2,
        borderRadius: 8,
        borderColor: "#c0c0c0",

        padding: 10,

        alignSelf: "flex-start",
        alignItems: "center",
        gap: 10
    },
    imagem: {
        width: 100,
        height: 100,

        backgroundColor: "whitesmoke",
        borderRadius: 8
    }
})

export default PokedexCard