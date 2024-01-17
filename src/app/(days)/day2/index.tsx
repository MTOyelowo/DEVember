import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const DayTwoDetailsScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 2" }} />
      <Text>Day 2 Details Screen</Text>

      <Link href={"/day2/onboarding"} asChild>
        <Button title="Go to onboarding" />
      </Link>
    </View>
  );
};

export default DayTwoDetailsScreen;

const styles = StyleSheet.create({});
