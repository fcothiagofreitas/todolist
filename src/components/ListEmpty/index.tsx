import { Text, View } from 'react-native';
import Clipboard from '../../assets/images/clipboard.svg';
import { styles } from './styles';

export function ListEmpty() {
  return (
    <View style={styles.listEmpty}>
      <Clipboard />
      <Text style={styles.titulo}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.subTitulo}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  );
}
