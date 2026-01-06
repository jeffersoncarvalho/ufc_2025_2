import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import styles from "./estilos";

const PerfilScreen = ({route}) => {

  const {nome, perfil} = route.params 
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.header}>Perfil {nome}, {perfil}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("MeuModal")}
        >
          <Text style={styles.buttonText}>Chamar Modal</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PerfilScreen;
