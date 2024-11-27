import BaseScreen from "@/components/screens/BaseScreen";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { FlatList } from "react-native";
import { ReactElement, useCallback, useEffect, useState } from "react";
import { userData } from "../data/userdata";
import UserStoryListItem from "@/components/UserStoryListItem";
import UserPost from "@/components/UserPost";
import Animated from "react-native-reanimated";
import axios from "axios";
import { spacingY } from "@/config/spacing";
import { normalizeX, normalizeY } from "@/utils/normalize";
import Feather from "@expo/vector-icons/build/Feather";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ResizeMode } from "expo-av";

const Users = [
  { profile: <UserPost username="User" postTitle="This is my title" />, id: 1 },
  { profile: <UserPost username="User" postTitle="This is my title" />, id: 2 },
  { profile: <UserPost username="User" postTitle="This is my title" />, id: 3 },
  { profile: <UserPost username="User" postTitle="This is my title" />, id: 4 },
  { profile: <UserPost username="User" postTitle="This is my title" />, id: 5 },
  { profile: <UserPost username="User" postTitle="This is my title" />, id: 6 },
  { profile: <UserPost username="User" postTitle="This is my title" />, id: 7 },
  { profile: <UserPost username="User" postTitle="This is my title" />, id: 8 },
  { profile: <UserPost username="User" postTitle="This is my title" />, id: 9 },
  {
    profile: <UserPost username="User" postTitle="This is my title" />,
    id: 10,
  },
];

export default function HomeScreen() {
  //useCallback - Memoization stores the result of a function
  // const [userServerData, setUserServerData] = useState<typeof UserPost[]| undefined>()

  //Memoization
  // const getUserProfiles = useCallback(async() => {

  //   try {
  //   const response = await axios.get("some endpoint")
  //   const data: typeof UserPost[] = await response.data
  //     if (response.status === 200) {
  //     setUserServerData(data)
  //     return data
  //   }
  //   }
  //   catch (error) {
  //     console.log(error)
  //   }

  // }, [userServerData])

  // //Getting server data for profiles
  // useEffect(() => {
  //    getUserProfiles() //Receive the server data

  // }, [])

  //Play sound or run animated effect
  const [videos, setVideos] = useState([])
  
  useEffect(() => {
    const getVideos = async () => {
      const response = await axios.get("http://localhost:3000/api/v1/videos");
      const data = response.data;

      setVideos(data)
    };
  }, [])

  return (
    <BaseScreen>
      <View
        style={{
          padding: 5,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: 20,
        }}
      >
        {/* This routes you to the camera page where you can take a photo of yourself and post it, post reels, post pictures you've took before hand, or go Live. */}
        <Pressable onPress={() => router.push("/(tabs)/addcontent")}>
          <Feather name="camera" size={27} />
        </Pressable>

        <View>
          <Image
            source={require("@/assets/images/Instagramlogo.png")}
            style={{ width: 190, height: 60 }}
          />
        </View>

        {/* This routes you to IGTV, where you can catch up with videos that people post */}
        <View style={{ flexDirection: "row", gap: 20 }}>
          <Pressable onPress={() => router.push("/(screens)/IGTVScreen")}>
            <MaterialCommunityIcons name="television-classic" size={27} />
          </Pressable>

          <Pressable onPress={() => router.push("/(screens)/MessagesScreen")}>
            <Feather name="send" size={27} />
          </Pressable>
        </View>
      </View>

      {/* Your story & Followings */}
      <View
        style={{
          flexDirection: "row",
          borderBottomWidth: 0.5,
          paddingBottom: 9,
        }}
      > 
        {/* FlatList containing all the profiles for the user and people they're following */}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={userData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <Pressable
              onPress={() =>
                index === 2
                  ? router.push("/(screens)/InstagramLive")
                  : index === 1 ? router.push("/(screens)/InstagramStory") : console.log(index)
              }
              key={index}
              style={{ maxHeight: 90, alignItems: "center" }}
            >
              <Image
                source={item.userPicture}
                style={{
                  maxWidth: "100%",
                  height: normalizeY(60),
                  width: normalizeX(60),
                  borderRadius: 50,
                  marginHorizontal: 5,
                }}
                resizeMode={ResizeMode.COVER}
              />
              <Text>{item.username}</Text>
            </Pressable>
          )}
        />
      </View>

      {/* FlatList for the videos and photos that people post. You can save, like, comment and share this video */}
      <Animated.FlatList
        contentContainerStyle={{
          flexGrow: 1,
          borderColor: "blue",
        }}
        scrollEnabled
        horizontal={false}
        data={Users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (

            <Animated.View
              style={{
                height: 500,
                marginVertical: spacingY._10,
                flexWrap: "nowrap",
              }}
            >
              {item.profile}
            </Animated.View>
          );
        }}
      />
    </BaseScreen>
  );
}

const styles = StyleSheet.create({});
