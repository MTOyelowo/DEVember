import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";

const AnimationScreen = () => {
  const animation = useRef<LottieView>(null);

  return (
    <View style={styles.container}>
      <LottieView
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#eee",
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("assets/lottie/netflix.json")}
      />

      <View style={styles.buttonsRow}>
        <Pressable
          onPress={() => animation.current?.play()}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Play</Text>
        </Pressable>
        <Pressable
          onPress={() => animation.current?.pause()}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Pause</Text>
        </Pressable>
        <Pressable
          onPress={() => animation.current?.reset()}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AnimationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsRow: {
    gap: 20,
    flexDirection: "row",
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
