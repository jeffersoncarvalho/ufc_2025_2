import { Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import styles from './estilos';

export default function MenuPrincipal() {
  
  const navigation = useNavigation()

  return (
  
     <SafeAreaView style={styles.container}> 
      <View style={styles.contentContainer}>
        <Text style={styles.header}>
          Menu Principal
        </Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate("Perfil",{nome:"Jefferson", perfil: "Professor"})}
        >
          <Text style={styles.buttonText}>Ver Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate("Projetos")}
        >
          <Text style={styles.buttonText}>Ver Projetos</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate("Contatos")}
        >
          <Text style={styles.buttonText}>Entrar em Contato</Text>
        </TouchableOpacity>

      </View>
      </SafeAreaView>
  );
}

