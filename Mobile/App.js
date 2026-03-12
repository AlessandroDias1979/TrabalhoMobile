import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./Home";
import CadastroAluno from "./CadastroAluno";
import CadastroTurma from "./CadastroTurma";

export default function App() {

  const Stack = createStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='CadastroAluno' component={CadastroAluno} />
            <Stack.Screen name='CadastroTurma' component={CadastroTurma} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

