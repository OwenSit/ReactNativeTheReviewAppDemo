import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function ReviewDetails() {
  return (
    <View style={styles.container}>
      <Text>This is the ReviewDetails Screen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24 },
});
