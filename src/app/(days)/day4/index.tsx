import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const DayThreeDetailsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 4" }} />
      <View style={styles.container}>
        <Text style={styles.header}>Day 4</Text>
        <Text style={styles.description}>Animated Splash Screen</Text>

        <Link href={"/day4/animation"} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Continue to animation</Text>
          </Pressable>
        </Link>

        <Link href={"/day4/splash"} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>
              Continue to the splash screen animation
            </Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
};

export default DayThreeDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    padding: 20,
  },
  header: {
    fontFamily: "Inter600",
    fontSize: 24,
  },
  description: {
    fontFamily: "Inter600",
    fontSize: 18,
  },
  button: {
    backgroundColor: "#FF1654",
    borderRadius: 50,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontFamily: "Inter600",
    padding: 15,
    paddingHorizontal: 25,
  },
});
