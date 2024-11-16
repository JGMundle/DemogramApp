import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useRef, useState } from "react";
import BaseScreen from "@/components/screens/BaseScreen";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { spacingX, spacingY } from "@/config/spacing";
import { router } from "expo-router";
import { Video, Audio, ResizeMode } from "expo-av";
import Animated, { FadeIn, FadeInLeft, FadeOut, LinearTransition } from "react-native-reanimated";
import { Sound } from "expo-av/build/Audio";

const IGTVScreen = () => {
  const videoRef = useRef<Video>(null);
  const [sound, setSound] = useState<Sound| null>(null)
  

  //Async Function calls Reminder
  //1. We use async if we need to extract data from an external source on the internet e.g database, website etc
  //2. We use async if we need to extract data from our file system e.g Hardrive etc
  const loadSound = async () => {
    const {sound} = await Audio.Sound.createAsync(
      require("@/assets/Sounds/natureSFX.wav")
    )
    setSound(sound)
  }

  const playSound = async () => {
    loadSound()
    if (sound !== null) {
      await sound.playAsync()
    }
  }

  // const gDurationTime = 1500
  return (
    <BaseScreen>
      
      {/* Header Options */}
      <Animated.View
        layout={LinearTransition}
        entering={FadeIn.duration(1500)}
        exiting={FadeOut.duration(1500)}
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: spacingY._10,
          gap: spacingX._30,
        }}
      >
        <Pressable onPress={() => {
          router.back()
          playSound()
        }
        }>
          <MaterialCommunityIcons name="chevron-left" size={46} />
        </Pressable>

        <Text style={{ fontWeight: "600", fontSize: 20 }}>IGTV</Text>

        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <MaterialCommunityIcons name="magnify" size={34} />
          <Ionicons name="add" size={38} />
        </View>
      </Animated.View>

      
    </BaseScreen>
  );
};

export default IGTVScreen;

const styles = StyleSheet.create({});
