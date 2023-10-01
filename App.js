import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import firstScreen from './screens/firstScreen';
import screen1_a from './screens/screen1_a';
import screen1_b from './screens/screen1_b';
import screen1_c from './screens/screen1_c';
import screen1_d from './screens/screen1_d';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='firstScreen' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='firstScreen' component={screen1_d} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

