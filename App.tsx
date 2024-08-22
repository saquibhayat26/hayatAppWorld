import { StatusBar } from "expo-status-bar";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

type ItemData = {
  id: string;
  title: string;
};

export default function App() {
  const renderBox = (item: any) => {
    return (
      <View style={styles.box} key={item.item.id}>
        <Text style={styles.text}>{item.item.title}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        numColumns={1}
        renderItem={renderBox}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9ede3",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },

  box: {
    width: 300,
    height: 300,
    borderRadius: 20,
    backgroundColor: "#e2bfa3a7",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "#9b4521",
    fontSize: 70,
  },
});

const DATA: ItemData[] = [
  {
    id: "1",
    title: "1",
  },
  {
    id: "2",
    title: "2",
  },
  {
    id: "3",
    title: "3",
  },
  {
    id: "4",
    title: "4",
  },
  {
    id: "5",
    title: "5",
  },
  {
    id: "6",
    title: "6",
  },
  {
    id: "7",
    title: "7",
  },
  {
    id: "8",
    title: "8",
  },
  {
    id: "9",
    title: "9",
  },
  {
    id: "10",
    title: "10",
  },
  {
    id: "11",
    title: "11",
  },
  {
    id: "12",
    title: "12",
  },
  {
    id: "13",
    title: "13",
  },
];
