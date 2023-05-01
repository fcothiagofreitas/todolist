import { FlatList, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
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

  const [dataList, setDataList] = useState<string[]>([]);
  const [itemTodo, setItemTodo] = useState('');

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

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  console.log('itemTodo', dataList);

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
            <Text style={styles.number}>0</Text>
          </View>
          <View style={styles.indicadores}>
            <Text style={styles.titleConcluidas}>Concluídas</Text>
            <Text style={styles.number}>0</Text>
          </View>
        </View>
        <FlatList
          style={styles.flatlist}
          data={dataList}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <ListItem key={item} textoItem={item} />}
          ListEmptyComponent={<ListEmpty />}
        />
      </View>
    </View>
  );
}
