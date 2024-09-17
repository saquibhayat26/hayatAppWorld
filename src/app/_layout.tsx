import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from "@expo-google-fonts/amatic-sc";
import {
  useFonts,
  Inter_900Black,
  Inter_600SemiBold,
  Inter_400Regular,
  Inter_800ExtraBold,
} from "@expo-google-fonts/inter";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false);

  let [fontsLoaded, fontsError] = useFonts({
    InterBlack: Inter_900Black,
    InterRegular: Inter_400Regular,
    InterSemi: Inter_600SemiBold,
    InterBold: Inter_800ExtraBold,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      try {
        if (fontsLoaded || fontsError) {
          await SplashScreen.hideAsync();
        }
      } catch (error) {
        console.warn(error);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, [fontsLoaded, fontsError]);

  if (!appIsReady) {
    return <ActivityIndicator />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        initialRouteName="index"
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
          statusBarColor: "#f9ede3",
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen
          name="(childProjects)/project2/index"
          options={{ title: "Firebase Notification" }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
