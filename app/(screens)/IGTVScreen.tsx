import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Animated,
  FlatList,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import BaseScreen from "@/components/screens/BaseScreen";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { spacingX, spacingY } from "@/config/spacing";
import { router } from "expo-router";
import { Video, Audio, ResizeMode } from "expo-av";
import {
  FadeIn,
  FadeInLeft,
  FadeOut,
  LinearTransition,
} from "react-native-reanimated";

import { Sound } from "expo-av/build/Audio";
import { ThemedText } from "@/components/ThemedText";
import { normalizeX } from "@/utils/normalize";

const videos = [
  { vid: require("@/assets/images/PexelVideos/Video6.mp4") },
  { vid: require("@/assets/images/PexelVideos/Video7.mp4") },
  { vid: require("@/assets/images/PexelVideos/Video8.mp4") },
  { vid: require("@/assets/images/PexelVideos/Video9.mp4") },
];

const IGTVScreen = () => {
  const videoRef = useRef<Video>(null);
  const videoRef2 = useRef<Video>(null);
  const [sound, setSound] = useState<Sound | null>(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playAsync();
  }, []);

  useEffect(() => {
    if (videoRef2.current) videoRef2.current.playAsync();
  }, []);

  //Async Function calls Reminder
  //1. We use async if we need to extract data from an external source on the internet e.g database, website etc
  //2. We use async if we need to extract data from our file system e.g Hardrive etc
  const loadSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("@/assets/Sounds/natureSFX.wav")
    );
    setSound(sound);
  };

  const playSound = async () => {
    loadSound();
    if (sound !== null) {
      await sound.playAsync();
    }
  };

  // const gDurationTime = 1500
  return (
    <BaseScreen>
      {/* Header Options */}
      <Animated.View
        // layout={LinearTransition}
        // entering={FadeIn.duration(1500)}
        // exiting={FadeOut.duration(1500)}
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: spacingY._10,
          gap: spacingX._30,
        }}
      >
        <Pressable
        
          onPress={() => {
            router.back();
            playSound();
          }}
        >
          <MaterialCommunityIcons name="chevron-left" size={46} />
        </Pressable>

        <ThemedText
          lightColor="black"
          darkColor="black"
          style={{ fontWeight: "600", fontSize: 20 }}
        >
          IGTV
        </ThemedText>

        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <MaterialCommunityIcons name="magnify" size={34} />
          <Ionicons name="add" size={38} />
        </View>
      </Animated.View>

      {/* Big screen */}
      <Video
        source={require("@/assets/images/PexelVideos/Video5.mp4")}
        style={{ width: "100%", height: "50%" }}
        useNativeControls={false}
        isLooping
        ref={videoRef}
        resizeMode={ResizeMode.COVER}
        isMuted
      />

      <FlatList
        data={videos}
        keyExtractor={(_, index) => index.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={{ width: "50%", maxHeight: 300 }}>
            <Video
              ref={videoRef2}
              key={index}
              source={item.vid}
              style={{
                height: 300,
                borderRadius: 5,
              }}
              resizeMode={ResizeMode.COVER}
              isLooping
            />
            <Text
              style={{
                color: "whitesmoke",
                fontSize: 15,
                zIndex: 10,
                fontWeight: "300",
                position: "absolute",
                top: 9,
                left: 160
              }}
            >
              9:14
            </Text>
            <View style={{ position: "absolute", bottom: 10, paddingLeft: normalizeX(6) }}>
              <Text
                style={{
                  color: "whitesmoke",
                  fontSize: 20,
                  zIndex: 10,
                  fontWeight: "400",
                }}
              >
                This is a record
              </Text>
              <Text
                style={{
                  color: "whitesmoke",
                  fontSize: 15,
                  zIndex: 10,
                  fontWeight: "300",
                }}
              >
                This is a_hash
              </Text>
              <Text
                style={{
                  color: "whitesmoke",
                  fontSize: 15,
                  zIndex: 10,
                  fontWeight: "300",
                }}
              >
                3 views
              </Text>
            </View>
          </View>
        )}
      />
    </BaseScreen>
  );
};

export default IGTVScreen;

const styles = StyleSheet.create({});
