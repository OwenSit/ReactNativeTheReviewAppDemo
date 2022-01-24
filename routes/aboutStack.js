import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "../screens/about";

const Stack = createNativeStackNavigator();

export default function AboutStack() {
  return (
    // <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="About Page" component={About} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}
