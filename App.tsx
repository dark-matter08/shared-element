import { StyleSheet, Text, View } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { NavigationContainer } from '@react-navigation/native';
import { ListScreen } from './src/screens/list.screen';
import { DetailScreen } from './src/screens/detail.screen';

enableScreens();

const Stack = createSharedElementStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="List">
          <Stack.Screen name="List" component={ListScreen} />
          <Stack.Screen name="Details" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
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
