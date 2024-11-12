import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export default function ScreenLayout() {
  // const colorScheme = useColorScheme();

  return (
      <Stack>
        <Stack.Screen
          name="UserPostDetailsScreen"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="shop" options={{ headerShown: false }} />
      </Stack>
  );
}
