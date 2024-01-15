import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList } from "react-native";
import DayListItem from "../components/core/DayListItem";

const days = [...Array(24)].map((val, index) => index + 1);

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.flatlistContent}
        columnWrapperStyle={styles.flatlistColumns}
        numColumns={2}
        data={days}
        renderItem={({ item }: { item: number }) => <DayListItem day={item} />}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    gap: 10,
  },
  flatlistContent: {
    gap: 10,
    padding: 10,
  },
  flatlistColumns: {
    gap: 10,
  },
});
