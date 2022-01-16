import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import * as Font from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import About from "./screens/about";
import Home from "./screens/home";
import ReviewDetails from "./screens/reviewDetails";
import AppLoading from "expo-app-loading";

const getFont = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return <Home />;
  } else {
    return (
      <AppLoading
        startAsync={getFont}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
