import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const Project3 = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Project 3" }} />
      <Link href={"project3/calculator"} asChild>
        <Pressable>
          <Text>Simple Calculator app with day & night theme</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default Project3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9ede3",
    alignItems: "center",
    justifyContent: "center",
  },
});
