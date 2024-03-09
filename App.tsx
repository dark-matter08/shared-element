import { Easing, StyleSheet, Text, View } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { NavigationContainer } from '@react-navigation/native';
import { ListScreen } from './src/screens/list.screen';
import { DetailScreen } from './src/screens/detail.screen';
import { DATA } from './src/config/travel';
import { HomeScreen } from './src/screens/home.screen';

enableScreens();

const Stack = createSharedElementStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen
          name="Details"
          component={DetailScreen}
          options={{
            gestureEnabled: false,
            transitionSpec: {
              open: {
                animation: 'timing',
                config: { duration: 500, easing: Easing.inOut(Easing.ease) },
              },
              close: {
                animation: 'timing',
                config: { duration: 500, easing: Easing.inOut(Easing.ease) },
              },
            },
            cardStyleInterpolator: ({ current: { progress } }) => {
              return {
                cardStyle: {
                  opacity: progress,
                },
              };
            },
          }}
          sharedElements={(route, otherRoute, showing) => {
            return DATA.map((item) => `item.${item.id}.icon`);
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
