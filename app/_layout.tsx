import { icons } from "@/constants";
import fonts from "@/constants/fonts";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const a = icons.eye;
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": fonts.PoppinsBlack,
    "Poppins-Bold": fonts.PoppinsBold,
    "Poppins-ExtraBold": fonts.PoppinsExtraBold,
    "Poppins-ExtraLight": fonts.PoppinsExtraLight,
    "Poppins-Light": fonts.PoppinsLight,
    "Poppins-Medium": fonts.PoppinsMedium,
    "Poppins-Regular": fonts.PoppinsRegular,
    "Poppins-SemiBold": fonts.PoppinsSemiBold,
    "Poppins-Thin": fonts.PoppinsThin,
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
