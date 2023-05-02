import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import Check from '../../assets/images/check.svg';
import Checked from '../../assets/images/checked.svg';

type Props = {
  nome: string;
  selecionado: boolean;
  onChange: any;
  textoItem: string;
  onRemove: () => void;
  onSelect: () => void;
};

export function ListItem({ textoItem, onRemove, onSelect }: Props) {
  const [selecionar, setSelecionar] = useState(false);

  if (selecionar == true) {
    return (
      <>
        <TouchableOpacity
          style={styles.listitenSelecionado}
          onStartShouldSetResponder={() => setSelecionar(!selecionar)}
        >
          <Checked style={styles.checkIcon} />
          <Text style={styles.tituloSelecionado}>{textoItem}</Text>
          <TouchableOpacity style={styles.deleteBtn} onPress={onRemove}>
            <AntDesign name="delete" size={16} style={styles.delete} />
          </TouchableOpacity>
        </TouchableOpacity>
      </>
    );
  } else {
    return (
      <>
        <TouchableOpacity
          style={styles.listiten}
          onStartShouldSetResponder={() => setSelecionar(!selecionar)}
        >
          <Check style={styles.checkIcon} />
          <Text style={styles.titulo}>{textoItem}</Text>
          <TouchableOpacity style={styles.deleteBtn} onPress={onRemove}>
            <AntDesign name="delete" size={16} style={styles.delete} />
          </TouchableOpacity>
        </TouchableOpacity>
      </>
    );
  }
}
