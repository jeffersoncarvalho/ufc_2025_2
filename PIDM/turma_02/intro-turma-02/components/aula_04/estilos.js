import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header :{
    fontSize: 30,
    fontWeight: "bold",
    margin: 20
  },
  container: {
    flex: 1,
    backgroundColor: "orange", // Fundo branco
  },
  contentContainer: {
    backgroundColor: "orange",
    flex: 1,
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center',     // Centraliza horizontalmente
  },
  button: {
    backgroundColor: '#D9D9D9', // O cinza claro da imagem
    width: 250,                 // Largura fixa para todos ficarem iguais
    paddingVertical: 15,        // Altura do botão
    alignItems: 'center',       // Centraliza o texto dentro do botão
    marginBottom: 12,           // Espaçamento entre os botões
    // Se quiser bordas arredondadas, adicione: borderRadius: 5
  },
  buttonText: {
    color: '#000000',           // Texto preto
    fontWeight: 'bold',         // Negrito
    fontSize: 16,               
  },
});

export default styles