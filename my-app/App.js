import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./screens/MainScreen";
import ModelingScreen from "./screens/ModelingScreen";
import { store } from "./store";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Список услуг" component={MainScreen} />
          <Stack.Screen name="Услуга" component={ModelingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
