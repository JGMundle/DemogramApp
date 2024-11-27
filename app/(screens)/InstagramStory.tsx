import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React from 'react'
import { AntDesign, Entypo, Feather, Ionicons } from '@expo/vector-icons';
import StoryProgressBar from '@/components/StoryProgressBar';
import { normalizeX, normalizeY } from '@/utils/normalize';
import { Colors } from '@/constants/Colors';
import { spacingX } from '@/config/spacing';
import { ResizeMode, Video } from 'expo-av';

const InsgramStory = () => {
  return (
    <View>
      <StoryProgressBar />

      <Video source={require("@/assets/images/PexelVideos/StoryReel/DrinkingCoffee.mp4")} style={{ width: "100%", height: "89%"}} resizeMode={ResizeMode.COVER} />

      {/* Bottom tab */}
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#0f0f0f",
          padding: 10,
          gap: 80,
        }}
      >
        <View
          style={{
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            paddingRight: spacingX._25,
          
          }}
        >
          <Pressable
            style={{
              backgroundColor: Colors.defaultGrayBG,
              borderRadius: 50,
              padding: normalizeX(4),
              marginLeft: 3,
              marginRight: spacingX._10
            }}
          >
            <Feather name="camera" size={27} />
          </Pressable>

          <TextInput placeholder="Send Message" placeholderTextColor={"gray"} />

        </View>

        <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>

          <Feather name="send" size={27} color={"whitesmoke"} />

          <Entypo name="dots-three-horizontal" size={17} color={"whitesmoke"} />
        </View>
      </View>
    </View>
  );
}

export default InsgramStory

const styles = StyleSheet.create({})