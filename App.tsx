import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ListScreen } from './src/screens/list.screen';
import { DetailScreen } from './src/screens/detail.screen';

export default function App() {
  return (
    <View style={styles.container}>
      <ListScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
