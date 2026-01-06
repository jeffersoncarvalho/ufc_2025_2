import { View, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './estilos';

export default function ProjetosScreen() {

  return (
  
     <SafeAreaView style={styles.container}> 
      <View style={styles.contentContainer}>
        <Text style={styles.header}>
            Projetos
        </Text>
      </View>
      </SafeAreaView>
  );
}

