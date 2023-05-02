import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/theme';

export const styles = StyleSheet.create({
  listiten: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 12,
    paddingRight: 8,
    paddingBottom: 12,
    paddingLeft: 12,
    backgroundColor: COLORS.gray500,
    borderColor: COLORS.gray400,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 8,
  },
  listitenSelecionado: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 12,
    paddingRight: 8,
    paddingBottom: 12,
    paddingLeft: 12,
    backgroundColor: COLORS.gray500,
    borderColor: COLORS.gray500,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 8,
  },
  titulo: {
    color: COLORS.gray100,
    fontFamily: 'Inter_400Regular',
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: 14,
  },
  tituloSelecionado: {
    color: COLORS.gray300,
    textDecorationLine: 'line-through',
    fontFamily: 'Inter_400Regular',
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: 14,
  },
  checkIcon: {
    color: COLORS.blue500,
    width: 24,
  },
  delete: {
    color: COLORS.gray300,
  },
  deletePress: {
    color: COLORS.danger,
  },
  deleteBtn: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
});
