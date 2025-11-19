import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import estilos from "./estilos";

const CalculadoraIMC = () => {

    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)
    const [imc, setIMC] = useState(0)

    function calcularIMC() {
        if (peso && altura) {
            if(!isNaN(peso.trim()) && !isNaN(altura.trim())) {
                const imc = peso / (altura * altura)
                //alert(imc)
                setIMC(imc)
            }else {
                alert("Entre apenas com números!")
            }
        }else {
            alert("Preencha todos os campos!")
        }
    }

    return (
        <View style={estilos.container}>
            
            <View style={estilos.header}>
                <Text style={estilos.texto}>Calculadora IMC</Text>
            </View>
            
            <View style={estilos.form}>
                <View>
                    <Text style={estilos.texto}>Peso:</Text>
                    <TextInput 
                        style={estilos.textoInput}
                        placeholder="Digite o seu peso (kg)"
                        keyboardType="numeric"
                        onChangeText={(peso) => setPeso(peso)}
                    />
                </View>
                <View>
                    <Text style={estilos.texto}>Altura:</Text>
                    <TextInput 
                        style={estilos.textoInput}
                        placeholder="Digite a sua altura (m)"
                        keyboardType="numeric"
                        onChangeText={(altura) => setAltura(altura)}
                    />
                </View>
            </View>
            <Button
                title="CALCULAR IMC"
                onPress={calcularIMC} 
            />
            <View style={estilos.resultado}>
                <Text style={estilos.texto}>Resultado: {imc}</Text>
            </View>
        </View>
    )
}

export default CalculadoraIMC