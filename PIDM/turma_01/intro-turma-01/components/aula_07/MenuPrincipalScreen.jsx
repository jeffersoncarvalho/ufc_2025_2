import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import estilos from "./estilos";

export default function MenuPrincipalScreen() {
  // Função auxiliar para lidar com o clique (opcional)
  const handlePress = (titulo) => {
    console.log(`Botão pressionado: ${titulo}`);
  };

  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.contentContainer}>
        {/* Botão 1: Ver Perfil */}
        <TouchableOpacity
          style={estilos.button}
          onPress={() => handlePress("Ver Perfil")}
          activeOpacity={0.7}
        >
          <Text style={estilos.buttonText}>Ver Perfil</Text>
        </TouchableOpacity>

        {/* Botão 2: Ver Projetos */}
        <TouchableOpacity
          style={estilos.button}
          onPress={() => handlePress("Ver Projetos")}
          activeOpacity={0.7}
        >
          <Text style={estilos.buttonText}>Ver Projetos</Text>
        </TouchableOpacity>

        {/* Botão 3: Entrar em Contato */}
        <TouchableOpacity
          style={estilos.button}
          onPress={() => handlePress("Entrar em Contato")}
          activeOpacity={0.7}
        >
          <Text style={estilos.buttonText}>Entrar em Contato</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
