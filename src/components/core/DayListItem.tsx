import { Pressable, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

type IDayListItem = {
  day: number;
};

export default function DayListItem({ day }: IDayListItem) {
  return (
    <Link href={`/day${day}`} asChild>
      <Pressable style={styles.box}>
        <Text style={styles.text}>{day}</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#F9EDE3",
    flex: 1,
    aspectRatio: 1,

    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#9B4521",
    borderRadius: 25,

    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#9B4521",
    fontSize: 75,
    fontFamily: "AmaticBold",
  },
});
