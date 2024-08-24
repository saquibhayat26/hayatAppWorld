import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Project2() {
  return (
    <View>
      <Stack.Screen options={{ title: "Project 2" }} />

      <Text style={{ fontFamily: "AmaticBold", fontSize: 100 }}>Project 2</Text>
    </View>
  );
}
