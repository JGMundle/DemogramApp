import BaseScreen from "@/components/screens/BaseScreen";
import { View, Text, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { FlatList } from "react-native";
import { ReactElement, useCallback, useEffect, useState } from "react";
import { userData } from "../data/userdata";
import UserStoryListItem from "@/components/UserStoryListItem";
import UserPost from "@/components/UserPost";
import Animated from "react-native-reanimated";
import axios from "axios";
import { spacingY } from "@/config/spacing";
import { normalizeY } from "@/utils/normalize";

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

  return (
    <BaseScreen>
      <View
        style={{
          padding: 5,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontSize: 30 }}>Instagram</Text>
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
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={userData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <UserStoryListItem
              _onPress={() => console.log(index)}
              index={index}
              user={item}
            />
          )}
        />
      </View>

      <Animated.FlatList
        contentContainerStyle={{
          flexGrow: 1,
          borderColor: "blue",
          // padding: spacingY._10,
        }}
        scrollEnabled
        horizontal={false}
        data={Users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            //
            <Animated.View
              style={{
                height: 500,
                marginVertical: spacingY._10,
                borderWidth: 3,
                flexWrap: "nowrap"
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
