import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { DATA } from "./src/data/dayListItem/Item";
import DayListItem from "./src/components/core/DayListItem";
import { ItemData } from "./src/data/dayListItem/types";

export default function App() {
  const [isRefereshing, setIsRefereshing] = useState(false);
  const renderBox = (item: { item: ItemData }) => {
    return <DayListItem id={item.item.id} day={item.item.day} />;
  };

  return (
    <SafeAreaView style={styles.container}>
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

      <StatusBar style="auto" />
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
