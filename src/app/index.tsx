import { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  StatusBarStyle,
  View,
} from "react-native";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from "@expo-google-fonts/amatic-sc";
import * as SplashScreen from "expo-splash-screen";
import { DATA } from "../data/dayListItem/Item";
import DayListItem from "../components/core/DayListItem";
import { ItemData } from "../data/dayListItem/types";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [isRefereshing, setIsRefereshing] = useState(false);

  let [fontsLoaded, fontsError] = useFonts({
    InterBlack: Inter_900Black,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      try {
        if (fontsLoaded || fontsError) {
          setAppIsReady(true);
        }
      } catch (error) {
        console.warn(error);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, [fontsLoaded, fontsError]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady || fontsLoaded || fontsError) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady, fontsLoaded, fontsError]);

  if (!appIsReady) {
    return <ActivityIndicator />;
  }

  const renderBox = (item: { item: ItemData }) => {
    return <DayListItem id={item.item.id} day={item.item.day} />;
  };

  return (
    <SafeAreaView onLayout={onLayoutRootView} style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={DATA}
        numColumns={2}
        renderItem={renderBox}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.columnWrapper}
        onRefresh={() => {
          setIsRefereshing(true);
          setTimeout(() => {
            setIsRefereshing(false);
          }, 2000);
        }}
        refreshing={isRefereshing}
        progressViewOffset={400}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9ede3",
  },

  content: {
    padding: 12,
    gap: 12,
  },

  columnWrapper: { gap: 12 },
});
