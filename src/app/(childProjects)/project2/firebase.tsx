import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const FirebaseScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      <Text style={styles.title}>firebase</Text>
    </SafeAreaView>
  );
};

export default FirebaseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9ede3",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
