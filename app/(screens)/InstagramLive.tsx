import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native'
import React, {useEffect, useRef} from 'react'
import { ResizeMode, Video } from 'expo-av'
import { FontAwesome, AntDesign } from '@expo/vector-icons'
import { router } from "expo-router"
import { normalizeX, normalizeY } from '@/utils/normalize'
import { Ionicons, Feather, Entypo } from '@expo/vector-icons'


const InstagramLive = () => {
  const autoPlay = useRef<Video>(null)

    useEffect(() => {
      if (autoPlay.current) autoPlay.current.playAsync();
    }, []);
  
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          position: "absolute",
          zIndex: 10,
          top: 15,
        }}
      >
        <View
          style={{
            maxHeight: 90,
            alignItems: "center",
            flexDirection: "row",
            gap: 18,
          }}
        >
          <Image
            source={require("@/assets/images/Sarushka.png")}
            style={{
              maxWidth: "100%",
              height: normalizeY(40),
              width: normalizeX(40),
              borderRadius: 50,
              marginHorizontal: 5,
            }}
            resizeMode={ResizeMode.COVER}
          />

          <Text style={{ fontWeight: "600", color: "whitesmoke" }}>
            @Sarushka__
          </Text>
        </View>

        {/* Live, Viewers and Close */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            marginLeft: 60,
          }}
        >
          {/* Remeber to ask Michael about how we get linear gradient colours */}
          <Text
            style={{
              borderWidth: 1,
              paddingVertical: 5,
              paddingHorizontal: 9,
              borderRadius: 5,
            }}
          >
            LIVE
          </Text>
          <View
            style={{
              borderWidth: 1,
              paddingVertical: 5,
              paddingHorizontal: 9,
              borderRadius: 5,
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
            }}
          >
            <FontAwesome name="eye" size={18} />
            <Text>0</Text>
          </View>

          <Pressable onPress={() => router.back()}>
            <AntDesign name="close" size={48} color="whitesmoke" />
          </Pressable>
        </View>
      </View>

      <Video
        source={require("@/assets/images/PexelVideos/TikTokDanceDuo.mp4")}
        style={{ width: "100%", height: "92%", borderRadius: 15 }}
        resizeMode={ResizeMode.COVER}
        isLooping
        ref={autoPlay}
      />

      
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
            paddingRight: 80,
          }}
        >
          <TextInput placeholder="Comment" placeholderTextColor={"gray"} />

          <Entypo name="dots-three-horizontal" size={17} color={"whitesmoke"} />
        </View>

        <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
          <Ionicons name="copy-outline" size={30} color={"whitesmoke"} />

          <Feather name="send" size={27} color={"whitesmoke"} />

          <AntDesign name="hearto" size={27} color={"whitesmoke"} />
        </View>
      </View>
    </View>
  );
}

export default InstagramLive

const styles = StyleSheet.create({})