import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import About from "./screens/about";
import Home from "./screens/home";
import ReviewDetails from "./screens/reviewDetails";

export default function App() {
  return (
    <View>
      <Home />
      <About />
      <ReviewDetails />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
