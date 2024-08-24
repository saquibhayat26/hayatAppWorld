import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Project1() {
  return (
    <View>
      <Stack.Screen options={{ title: "Project 1" }} />
      <Text>Project 1</Text>
    </View>
  );
}
