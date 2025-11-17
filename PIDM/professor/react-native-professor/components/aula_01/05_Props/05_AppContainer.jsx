import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

export const AppContainer = () => {

    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)
  

  const calcularIMC = () => {
    if (altura && peso) {
      //alert(`Peso ${peso}, Altura ${altura}`)
      if(!isNaN(peso.trim()) && !isNaN(altura.trim())){
        const imc = peso / (altura * altura)
        alert(`Seu IMC é: ${imc}`)
      }
    }else {
      alert("Entre com dados válidos!")
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>CÁLCULO DE IMC 2</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Peso: </Text>
          <TextInput 
            
            style={styles.textInput} 
            placeholder="Digite seu peso" 
            keyboardType="numeric"
            onChangeText={peso => setPeso(peso)}
            />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Altura: </Text>
          <TextInput 
            style={styles.textInput} 
            placeholder="Digite sua altura" 
            keyboardType="numeric"
            onChangeText={altura => setAltura(altura)} 
            />
        </View>
        <View>
            <Button 
                title="CALCULAR!"
                onPress={() => calcularIMC()}
            />
        </View>
      </View>
      <View style={styles.result}>
        <Text style={[styles.label, {width:"100%"}]}>Resultado: {peso}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "antiquewhite",
    flex: 1,
    padding: 15,
    alignItems: "center",
    gap: 15,
  },
  header: {
    borderColor: "#C0C0C0",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: "white",
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  form: {
    backgroundColor: "white",
    borderColor: "#C0C0C0",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 8,
    width: "90%",
    padding: 15,
  },
  formGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    fontWeight: "bold",
    color: "#333",
    width: "20%"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
    flex: 1
  },
  result: {
    backgroundColor: "white",
    borderColor: "#C0C0C0",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 8,
    width: "90%",
    padding: 15,
  },
});
