import React from "react";
import { Text, View, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("ReviewDetails");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>This is the Home Screen!</Text>
      <Button title="go to review page" onPress={pressHandler} />
    </View>
  );
}
