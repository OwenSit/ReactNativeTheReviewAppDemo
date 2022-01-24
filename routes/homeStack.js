import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeSweetHome"
          component={Home}
          options={{
            title: "GameZone",
            // headerStyle: { backgroundColor: "#eee" },
          }}
        />
        <Stack.Screen
          name="ReviewDetails"
          component={ReviewDetails}
          options={{
            title: "Review Details",
            // headerStyle: { backgroundColor: "#eee" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
