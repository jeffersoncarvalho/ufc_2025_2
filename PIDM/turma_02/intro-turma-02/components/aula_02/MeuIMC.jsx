import {View, Text, TextInput, Button} from "react-native"
import { useState } from "react"
import estilos from "./estilos"

const MeuIMC = () => {

    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)
    const [resultado, setResultado] = useState(0)

    function calcularIMC() {
        setResultado(peso/altura**2)   
    }

    return (
        <View style={estilos.container}>
            <View style={estilos.header}>
                <Text style={estilos.texto}>Calculadora IMC</Text>
            </View>
            <View style={estilos.form}>
                <View style={estilos.formGroup}>
                    <Text style={estilos.texto}>Peso: </Text>
                    <TextInput 
                        style={estilos.textoInput}
                        keyboardType="numeric"
                        placeholder="Digite o seu peso" 
                        onChangeText={(x) => setPeso(x)}
                    />
                </View>
                <View style={estilos.formGroup}>
                    <Text style={estilos.texto}>Altura: </Text>
                    <TextInput 
                        style={estilos.textoInput}
                        keyboardType="numeric"
                        placeholder="Digite a sua altura"
                        onChangeText={(x) => setAltura(x)}
                    />
                </View>
            </View>
            <View>
                <Button 
                    title="CALCULAR"
                    onPress={calcularIMC}
                />
            </View>
            <View style={estilos.form}>
                <Text style={estilos.texto}>
                    Resultado: {resultado}
                </Text>
            </View>
        </View>
    )
}

export default MeuIMC