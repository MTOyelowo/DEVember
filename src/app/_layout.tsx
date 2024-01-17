import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from "@expo-google-fonts/amatic-sc";
import {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
  useFonts,
} from "@expo-google-fonts/inter";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Inter: Inter_400Regular,
    InterBold: Inter_900Black,
    Inter600: Inter_600SemiBold,
    Inter700: Inter_700Bold,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack screenOptions={{}}>
        <Stack.Screen name="index" options={{ title: "DEVember" }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
