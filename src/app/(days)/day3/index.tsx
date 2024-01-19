import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "@/components/day3/MarkdownDisplay";

const description = `
# Markdown

Integrate Markdown content in **React Native**

📚 Today's Agenda:
- Introduction to Markdown 
- Markdown Syntax and Overview
- Setting up React Native for Markdown 
- Implementing Markdown Rendering
- Styling Markdown Content
- Using Markdown in React Native Components
- Recap and Q&A Session

`;

const DayThreeDetailsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 3" }} />
      <View style={styles.container}>
        <Text style={styles.header}>Day 3</Text>
        <MarkdownDisplay>{description}</MarkdownDisplay>

        <Link href={"/day3/editor"} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Continue to editor</Text>
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
  button: {
    backgroundColor: "#302E38",
    borderRadius: 50,
    alignItems: "center",
  },
  buttonText: {
    color: "#FDFDFD",
    fontFamily: "Inter600",
    padding: 15,
    paddingHorizontal: 25,
  },
});
