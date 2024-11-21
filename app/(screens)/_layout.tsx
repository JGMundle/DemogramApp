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
      <Stack.Screen name="EditProfile" options={{ headerShown: false }} />
      <Stack.Screen name="MessagesScreen" options={{ headerShown: false }} />
      <Stack.Screen name="IGTVScreen" options={{ headerShown: false }}/>
      <Stack.Screen name="SearchPicks" options={{ headerShown: false }}/>
      <Stack.Screen name="AddImage" options={{ headerShown: false }}/>
      <Stack.Screen name="UserItemScreen" options={{ headerShown: false }}/>
      </Stack>
  );
}
