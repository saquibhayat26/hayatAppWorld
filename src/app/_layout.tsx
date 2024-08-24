import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerBackTitleVisible: false,
        headerShadowVisible: false,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#f9ede3",
        },
        headerTitleStyle: {
          fontFamily: "AmaticBold",
          fontSize: 30,
        },
        headerTintColor: "#9b4521",
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: "Home", statusBarColor: "#f9ede3" }}
      />
    </Stack>
  );
}
