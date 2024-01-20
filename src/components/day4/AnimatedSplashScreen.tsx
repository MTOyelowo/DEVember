import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import Animated, { FadeOut, ZoomOut } from "react-native-reanimated";

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const AnimatedSplashScreen = ({
  onAnimatedFinish = (isCancelled) => {},
}: {
  onAnimatedFinish?: (isCancelled: boolean) => void;
}) => {
  const animation = useRef<LottieView>(null);

  return (
    <Animated.View exiting={FadeOut.duration(500)} style={styles.container}>
      <AnimatedLottieView
        exiting={ZoomOut.duration(500)}
        ref={animation}
        onAnimationFinish={onAnimatedFinish}
        autoPlay
        loop={false}
        style={{
          width: "80%",
          maxWidth: 400,
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("assets/lottie/netflix.json")}
      />
    </Animated.View>
  );
};

export default AnimatedSplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
});
