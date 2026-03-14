import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./Home";
import Aluno from "./Aluno";
import Turma from "./Turma";

export default function App() {

  const Stack = createStackNavigator(); 

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Aluno" component={Aluno} />
        <Stack.Screen name="Turma" component={Turma} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
