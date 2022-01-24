import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useState } from "react";
import * as Font from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import HomeStack from "./routes/homeStack";
import AboutStack from "./routes/aboutStack";
import RootDrawerNavigator from "./routes/drawer";

const getFont = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return <RootDrawerNavigator />;
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
