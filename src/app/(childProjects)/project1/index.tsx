import { Link, Stack } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Project1() {
  return (
    <View>
      <Stack.Screen options={{ title: "Project 1" }} />
      <Text style={styles.text}>OnBoarding Screen</Text>
      <Link href={"/project1/onboarding"} asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Go to Onboarding</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#9b4521",
    fontFamily: "AmaticBold",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#9b4521",
    textAlign: "center",
    fontWeight: "bold",
  },
});
