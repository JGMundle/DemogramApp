import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export default function RootLayout() {
  // const colorScheme = useColorScheme();

  return (
      <Stack>
        <Stack.Screen
          name="UserPostDetialsScreen"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="shop" options={{ headerShown: false }} />
      </Stack>
  );
}