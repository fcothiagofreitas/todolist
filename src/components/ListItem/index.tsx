import { Text, TouchableOpacity, Pressable } from 'react-native';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons';
import Check from '../../assets/images/check.svg';
import Checked from '../../assets/images/checked.svg';
import { COLORS } from '../../theme/theme';

type Props = {
  textoItem: string;
  onSelect: () => void;
  checkItem: () => void;
  onDelete: () => void;
};

export function ListItem({ onSelect, checkItem, onDelete, textoItem }: Props) {
  return (
    <>
      <Pressable
        onPress={onSelect}
        style={checkItem ? styles.listitenSelecionado : styles.listiten}
      >
        {checkItem ? <Checked style={styles.checkIcon} /> : <Check style={styles.checkIcon} />}
        <Text style={checkItem ? styles.tituloSelecionado : styles.titulo}>{textoItem}</Text>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? COLORS.gray400 : 'tranparent',
            },
            styles.deleteBtn,
          ]}
          onPress={onDelete}
        >
          {({ pressed }) => (
            <AntDesign
              name="delete"
              size={16}
              style={pressed ? styles.deletePress : styles.delete}
            />
          )}
        </Pressable>
      </Pressable>
    </>
  );
}
