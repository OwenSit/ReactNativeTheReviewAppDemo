import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Text>This is the About Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24 },
});
