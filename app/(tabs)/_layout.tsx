import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { FontAwesome } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "magnify" : "magnify-close"}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="addcontent"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "plus-box-outline" : "plus-box-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="reels"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "play-box" : "play-box-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <FontAwesome name={focused ? "user-circle": "user-circle-o"} size={26}/>
          ),
        }}
      />
    </Tabs>
  );
}
