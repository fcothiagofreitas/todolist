import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray600,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: COLORS.gray100,
  },

  header: {
    height: 173,
    backgroundColor: COLORS.gray700,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 24,
    paddingTop: 0,
    marginTop: -27,
  },
  input: {
    height: 54,
    backgroundColor: COLORS.gray500,
    borderColor: COLORS.gray700,
    width: '100%',
    borderRadius: 6,
    padding: 16,
    flex: 1,
  },
  btnAdd: {
    width: 52,
    height: 52,
    backgroundColor: COLORS.blue900,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  addToDo: {
    width: '100%',
    flexDirection: 'row',
  },
  topoList: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 32,
    paddingBottom: 20,
  },
  indicadores: {
    flexDirection: 'row',
  },
  concluidas: {
    color: COLORS.purple500,
  },
  title: {
    fontSize: 14,
    color: COLORS.blue500,
    fontFamily: 'Inter_700Bold',
  },
  titleConcluidas: {
    fontSize: 14,
    color: COLORS.purple500,
    fontFamily: 'Inter_700Bold',
  },
  number: {
    fontSize: 12,
    color: COLORS.gray100,
    fontFamily: 'Inter_700Bold',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: COLORS.gray400,
    borderRadius: 100,
    marginLeft: 10,
  },
  flatlist: {
    width: '100%',
  },
});
