import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Fundo branco
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center',     // Centraliza horizontalmente
    paddingHorizontal: 20,
    backgroundColor:"red"
  },
  button: {
    backgroundColor: '#D9D9D9', // Cor cinza claro (similar à imagem)
    width: '70%',               // Largura relativa à tela
    paddingVertical: 15,        // Altura do botão através do preenchimento
    marginVertical: 10,         // Espaçamento entre os botões
    alignItems: 'center',       // Centraliza o texto dentro do botão
    justifyContent: 'center',
    // Não adicionei borderRadius para manter o visual "quadrado" da imagem,
    // mas se quiser arredondar, adicione: borderRadius: 8
  },
  buttonText: {
    color: '#000000',           // Texto preto
    fontSize: 16,
    fontWeight: 'bold',         // Texto em negrito
  },
});

export default estilos