import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import Check from '../../assets/images/check.svg';
import Checked from '../../assets/images/checked.svg';

type Props = {
  nome: string;
  selecionado: boolean;
  onChange: any;
  textoItem: string;
};

export function ListItem({ textoItem, selecionado, onChange }: Props) {
  const [selecionar, setSelecionar] = useState(false);

  if (selecionar == true) {
    return (
      <>
        <View
          style={styles.listitenSelecionado}
          onStartShouldSetResponder={() => setSelecionar(!selecionar)}
        >
          <Checked style={styles.checkIcon} />
          <Text style={styles.tituloSelecionado}>{textoItem}</Text>
          <TouchableOpacity style={styles.deleteBtn}>
            <AntDesign name="delete" size={16} style={styles.delete} />
          </TouchableOpacity>
        </View>
      </>
    );
  } else {
    return (
      <>
        <View style={styles.listiten} onStartShouldSetResponder={() => setSelecionar(!selecionar)}>
          <Check style={styles.checkIcon} />
          <Text style={styles.titulo}>{textoItem}</Text>
          <TouchableOpacity style={styles.deleteBtn}>
            <AntDesign name="delete" size={16} style={styles.delete} />
          </TouchableOpacity>
        </View>
      </>
    );
  }
}
