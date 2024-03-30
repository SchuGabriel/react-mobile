import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './componentes/Home';
import Details from './componentes/Details';
import New from './componentes/New';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Lista de Compras' }} />
        <Stack.Screen name="Details" component={Details} options={{ title: 'Detalhes do Item' }} />
        <Stack.Screen name="New" component={New} options={{ title: 'Novo Item' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
