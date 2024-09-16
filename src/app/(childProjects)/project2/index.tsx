import { Link, Stack } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Project2() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Project 2" }} />

      <Text style={styles.title}>Firebase Tutorial</Text>
      <Link href={"/project2/notifications"} asChild>
        <Pressable>
          <Text style={styles.subtitle}>Go to Firebase</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9ede3",
  },
  title: {
    fontFamily: "AmaticBold",
    fontSize: 40,
  },
  subtitle: {
    fontFamily: "AmaticBold",
    fontSize: 20,
  },
});
