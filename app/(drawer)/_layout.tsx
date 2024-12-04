import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { Drawer } from "expo-router/drawer"
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";


export default function DrawerLayout() {
  // const colorScheme = useColorScheme();

  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
          <Drawer>
              <Drawer.Screen name="Home" options={{ drawerLabel: "Home", title: "Home", drawerIcon: () => <MaterialCommunityIcons name="home" />}} />
              <Drawer.Screen name="Profile" options={{drawerLabel: "Profile", title:"overview", drawerIcon: () => <MaterialCommunityIcons name="account"/>}}/>
              <Drawer.Screen name="Settings" options={{drawerLabel: "Settings", title:"overview", drawerIcon: () => <AntDesign name="setting"/>}}/>
          </Drawer>
      </GestureHandlerRootView>
   
  );
}
