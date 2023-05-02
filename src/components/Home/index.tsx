import { FlatList, Text, TextInput, TouchableOpacity, View, Alert, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import { styles } from './styles';
import { useFonts, Inter_700Bold, Inter_400Regular } from '@expo-google-fonts/inter';
import Logo from '../../assets/images/Logo.svg';
import { COLORS } from '../../theme/theme';
import { AntDesign } from '@expo/vector-icons';
import { ListEmpty } from '../ListEmpty';
import { ListItem } from '../ListItem';

export function Home() {
  useEffect(() => {
    console.log('Alguma coisa mudou');
  }, []);

  //State do array da lista com os itens a fazer
  const [dataList, setDataList] = useState<string[]>([]);
  //State do campo de input para add na lista
  const [itemTodo, setItemTodo] = useState('');
  //Numeros total de itens criados da lista
  const [criadas, setCriadas] = useState(0);
  //Numeros total de itens concluidos da lista
  const [concluidos, setConcluidos] = useState(0);

  function handleAddList() {
    if (itemTodo.length === 0) {
      return Alert.alert('O item da lista não pode ser vazio');
    } else if (dataList.includes(itemTodo)) {
      return Alert.alert(
        'Item ja exites',
        'Este item já está na lista, mesmo assim quer adicionar ?',
        [
          {
            text: 'Não',
            style: 'cancel',
          },
          {
            text: 'Sim',
            onPress: () => {
              return true;
            },
            style: 'destructive',
          },
        ]
      );
    }
    setDataList((prevState) => [...prevState, itemTodo]);
    setItemTodo('');
  }

  function deleteItemDataList(textoItem: string) {
    setDataList((prevState) => prevState.filter((i) => i !== textoItem));
    setItemSelecionado(itemSelecionado.filter((i) => i !== textoItem));
  }

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  // Estado de selecionar item
  const [itemSelecionado, setItemSelecionado] = useState([]);

  const isChecked = (id) => {
    return itemSelecionado.includes(id);
  };
  const toogleId = (textoItem: string) => {
    if (isChecked(textoItem)) {
      setItemSelecionado(itemSelecionado.filter((i) => i !== textoItem));
    } else {
      setItemSelecionado([...itemSelecionado, textoItem]);
    }
  };

  useEffect(() => {
    const totalDataList = dataList.length;
    const totalConcluidas = itemSelecionado.length;
    setCriadas(totalDataList);
    setConcluidos(totalConcluidas);
  }, [dataList, itemSelecionado]);

  if (!fontsLoaded) return null;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
      </View>
      <View style={styles.list}>
        <View style={styles.addToDo}>
          <TextInput
            style={styles.input}
            placeholder="Adione uma nova tarefa"
            placeholderTextColor={COLORS.gray300}
            onChangeText={setItemTodo}
            value={itemTodo}
          />
          <TouchableOpacity style={styles.btnAdd} onPress={handleAddList}>
            <AntDesign name="pluscircleo" size={16} color={COLORS.gray100} />
          </TouchableOpacity>
        </View>
        <View style={styles.topoList}>
          <View style={styles.indicadores}>
            <Text style={styles.title}>Criadas</Text>
            <Text style={styles.number}>{criadas}</Text>
          </View>
          <View style={styles.indicadores}>
            <Text style={styles.titleConcluidas}>Concluídas</Text>
            <Text style={styles.number}>{concluidos}</Text>
          </View>
        </View>
        <FlatList
          style={styles.flatlist}
          data={dataList}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <>
              <ListItem
                key={item}
                textoItem={item}
                onSelect={() => toogleId(item)}
                checkItem={isChecked(`${item}`)}
                onDelete={() => deleteItemDataList(`${item}`)}
              />
            </>
          )}
          ListEmptyComponent={<ListEmpty />}
        />
      </View>
    </View>
  );
}
{
  /* <Pressable onPress={() => toogleId(item)} style={styles.listiten}>
                {isChecked(item) ? (
                  <Checked style={styles.checkIcon} />
                ) : (
                  <Check style={styles.checkIcon} />
                )}
                <Text style={styles.titulo}>{item}</Text>
                <TouchableOpacity
                  style={styles.deleteBtn}
                  onPress={() => deleteItemDataList(`${item}`)}
                >
                  <AntDesign name="delete" size={16} style={styles.delete} />
                </TouchableOpacity>
              </Pressable> */
}
