import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { Home } from './src/components/Home';

export default function App() {
  return (
    <>
      <StatusBar style="inverted" />
      <Home />
    </>
  );
}
