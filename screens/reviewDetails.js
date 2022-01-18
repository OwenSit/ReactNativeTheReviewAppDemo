import React from "react";
import { Text, View, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({ route, navigation }) {
  const { item } = route.params;
  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Text>{item.title}</Text>
      <Text>{item.body}</Text>
      <Text>{item.rating}</Text>
      <Button title="back to home screen" onPress={pressHandler} />
    </View>
  );
}
