import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import MarkdownDisplay from "@/components/day3/MarkdownDisplay";

const template = `# Markdown editor

Hello **World**!
`;

const EditorScreen = () => {
  const [content, setContent] = useState(template);
  const [tab, setTab] = useState("edit");

  return (
    <View style={styles.page}>
      <View style={styles.tabsContainer}>
        <Pressable
          onPress={() => setTab("edit")}
          style={[
            styles.tab,
            { backgroundColor: tab === "edit" ? "#302E38" : "whitesmoke" },
          ]}
        >
          <Text
            style={[
              styles.tabText,
              { color: tab === "edit" ? "whitesmoke" : "#302E38" },
            ]}
          >
            Edit
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setTab("preview")}
          style={[
            styles.tab,
            { backgroundColor: tab === "preview" ? "#302E38" : "whitesmoke" },
          ]}
        >
          <Text
            style={[
              styles.tabText,
              { color: tab === "preview" ? "whitesmoke" : "#302E38" },
            ]}
          >
            Preview
          </Text>
        </Pressable>
      </View>

      {tab === "edit" ? (
        <TextInput
          value={content}
          onChangeText={setContent}
          multiline
          numberOfLines={50}
          style={styles.input}
        />
      ) : (
        <MarkdownDisplay>{content}</MarkdownDisplay>
      )}
    </View>
  );
};

export default EditorScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: "whitesmoke",
    flex: 1,
    padding: 10,
  },
  input: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    fontSize: 16,
    flex: 1,
  },
  tabsContainer: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 10,
  },
  tab: {
    flex: 1,
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
  },
  tabText: {
    fontFamily: "InterBold",
  },
});
