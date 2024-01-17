import { Stack, router } from "expo-router";
import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Directions,
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";
import Animated, {
  FadeIn,
  FadeOut,
  BounceInRight,
  BounceOutLeft,
  SlideInLeft,
  SlideOutRight,
  SlideOutLeft,
  SlideInRight,
} from "react-native-reanimated";

const onboardingSteps = [
  {
    icon: "snowflake",
    title: "Welcome to #DEVember",
    description:
      "Daily React Native tutorials all through the first 24 days of December",
  },
  {
    icon: "slideshare",
    title: "Learn and grow together",
    description: "Learn by building 24 projects with React Native and Expo",
  },
  {
    icon: "donate",
    title: "Education for children",
    description:
      "Contribute to the fundraiser 'Education for Children' to help put children in Africa in school",
  },
];

const OnboardingScreen = () => {
  const [screenIndex, setScreenIndex] = useState(0);

  const data = onboardingSteps[screenIndex];

  const onContinue = () => {
    const isLastScreen = screenIndex === onboardingSteps.length - 1;
    if (isLastScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };

  const onBack = () => {
    const isFirstScreen = screenIndex === 0;
    if (isFirstScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex - 1);
    }
  };

  const endOnboarding = () => {
    setScreenIndex(0);
    router.back();
  };

  const swipes = Gesture.Simultaneous(
    Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue),
    Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack)
  );

  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />

      <View style={styles.stepIndicatorContainer}>
        {onboardingSteps.map((step, index) => (
          <View
            key={index}
            style={[
              styles.stepIndicator,
              {
                backgroundColor: index === screenIndex ? "#CEF202" : "gray",
              },
            ]}
          />
        ))}
      </View>

      <GestureDetector gesture={swipes}>
        <View style={styles.pageContent} key={screenIndex}>
          <Animated.View entering={FadeIn} exiting={FadeOut}>
            <FontAwesome5
              style={styles.image}
              name={data.icon}
              size={150}
              color="#CEF202"
            />
          </Animated.View>

          <View style={styles.footer}>
            <Animated.Text
              entering={SlideInRight.duration(600)}
              exiting={SlideOutLeft}
              style={styles.title}
            >
              {data.title}
            </Animated.Text>
            <Animated.Text
              entering={FadeIn.delay(500)}
              exiting={FadeOut}
              style={styles.subTitle}
            >
              {data.description}
            </Animated.Text>

            <View style={styles.buttonsRow}>
              <Text onPress={endOnboarding} style={styles.buttonText}>
                Skip
              </Text>
              <Pressable onPress={onContinue} style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </GestureDetector>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  page: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#141414",
    paddingTop: 40,
  },
  pageContent: {
    flex: 1,
    padding: 20,
  },
  title: {
    color: "#FDFDFD",
    fontSize: 50,
    fontFamily: "InterBold",
    letterSpacing: 1.3,
    marginVertical: 10,
  },
  subTitle: {
    color: "gray",
    fontSize: 20,
    fontFamily: "Inter",
    lineHeight: 27,
  },
  image: {
    alignSelf: "center",
    margin: 20,
    marginTop: 70,
  },
  footer: {
    marginTop: "auto",
  },
  buttonsRow: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  button: {
    backgroundColor: "#302E38",
    borderRadius: 50,
    alignItems: "center",
    flex: 1,
  },
  buttonText: {
    color: "#FDFDFD",
    fontFamily: "Inter600",
    padding: 15,
    paddingHorizontal: 25,
  },

  //steps

  stepIndicatorContainer: {
    marginHorizontal: 15,
    flexDirection: "row",
    gap: 8,
  },
  stepIndicator: {
    flex: 1,
    height: 3,
    borderRadius: 10,
  },
});
