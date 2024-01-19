import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { PropsWithChildren } from "react";
import Markdown from "react-native-markdown-display";

const MarkdownDisplay = ({ children }: PropsWithChildren) => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.page}>
      <Markdown style={markdownStyles}>{children}</Markdown>
    </ScrollView>
  );
};

export default MarkdownDisplay;

const markdownStyles = StyleSheet.create({
  heading1: {
    fontFamily: "InterBold",
    color: "#212020",
    marginTop: 15,
    marginBottom: 10,
    lineHeight: 40,
  },
  heading2: {
    fontFamily: "Inter700",
    color: "#404040",
    marginTop: 15,
    marginBottom: 5,
    lineHeight: 30,
  },
  body: {
    fontSize: 16,
    lineHeight: 25,
    marginBottom: 20,
  },
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
    padding: 20,
    width: "100%",
  },
});
