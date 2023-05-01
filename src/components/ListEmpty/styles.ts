import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/theme';

export const styles = StyleSheet.create({
  titulo: {
    color: COLORS.gray300,
    paddingTop: 16,
    fontFamily: 'Inter_700Bold',
  },
  subTitulo: {
    color: COLORS.gray300,
    fontFamily: 'Inter_400Regular',
  },
  listEmpty: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 48,
    borderTopColor: COLORS.gray400,
    borderTopWidth: 1,
  },
});
