import { Pressable, StyleSheet, Text } from "react-native";
import { Link } from "expo-router";

function DayListItem({ id, day }) {
  return (
    <Link href={`/project${id}`} asChild>
      <Pressable style={styles.box} key={id}>
        <Text style={styles.text}>{day}</Text>
      </Pressable>
    </Link>
  );
}

export default DayListItem;

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

  box: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 20,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: "#e2bfa3a7",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "#9b4521",
    fontFamily: "AmaticBold",
    fontSize: 70,
  },

  hairLineWidht: {
    width: 1,
  },
});
