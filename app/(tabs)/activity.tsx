import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import BaseScreen from "@/components/screens/BaseScreen";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import ActivityItem, { ActivityCard } from "@/components/ActivityItem";
import ActivityItemGroup from "@/components/ActivityItemGroup";
import axios from "axios";
import { useRouter } from "expo-router";


 enum UserActions {
    LIKED_POST = "liked_Post",
    LIKED_VIDEO = "liked_video",
    LIKED_COMMENT = "liked_comment",
  }

  const activityData: User[] = [
    { username: "kareen", action: UserActions.LIKED_POST, text: "liked post" },
    { username: "john", action: UserActions.LIKED_POST, text: "liked post" },
    { username: "kareen", action: UserActions.LIKED_POST, text: "liked post" },
    { username: "kareen", action: UserActions.LIKED_POST, text: "liked post" },
    { username: "kareen", action: UserActions.LIKED_POST, text: "liked post" },
    { username: "kareen", action: UserActions.LIKED_POST, text: "liked post" },
    { username: "kareen", action: UserActions.LIKED_POST, text: "liked post" },
    { username: "kareen", action: UserActions.LIKED_POST, text: "liked post" },
    { username: "kareen", action: UserActions.LIKED_POST, text: "liked post" },
    { username: "kareen", action: UserActions.LIKED_POST, text: "liked post" },
    { username: "kareen", action: UserActions.LIKED_POST, text: "liked post" },
    { username: "kareen", action: UserActions.LIKED_POST, text: "liked post" },
    { username: "kareen", action: UserActions.LIKED_POST, text: "liked post" },
    { username: "kareen", action: UserActions.LIKED_POST, text: "liked post" },
    { username: "kareen", action: UserActions.LIKED_POST, text: "liked post" },
    { username: "john", action: UserActions.LIKED_POST, text: "liked post" },
    { username: "kareen", action: UserActions.LIKED_POST, text: "liked post" },
    { username: "kareen", action: UserActions.LIKED_POST, text: "liked post" },
    { username: "kareen", action: UserActions.LIKED_POST, text: "liked post" },
    { username: "kareen", action: UserActions.LIKED_POST, text: "liked post" },
    { username: "kareen", action: UserActions.LIKED_POST, text: "liked post" },
    { username: "kareen", action: UserActions.LIKED_POST, text: "liked post" },
    { username: "kareen", action: UserActions.LIKED_POST, text: "liked post" },
    { username: "kareen", action: UserActions.LIKED_POST, text: "liked post" },
    { username: "kareen", action: UserActions.LIKED_POST, text: "liked post" },
    { username: "kareen", action: UserActions.LIKED_POST, text: "liked post" },
    { username: "kareen", action: UserActions.LIKED_POST, text: "liked post" },
    { username: "kareen", action: UserActions.LIKED_POST, text: "liked post" },
  ];
  const KarennneImages = [
    { img: require("../../assets/images/Pexel/FlowersOnABike.jpg") },
    { img: require("../../assets/images/Pexel/PersonInTheSunset.jpg") },
    { img: require("../../assets/images/Pexel/KoreanBackAlley.jpg") },
  ];

   interface Action {}
 
  interface User {
    username: string;
    action: UserActions;
    text: string;
  }

const reels = () => {
  const [gridSelected, setGridSelected] = useState<boolean>(false);
  const [userActivityData, setUserActivityData] = useState<User[]>();

  const router = useRouter()


  return (
    <BaseScreen>
      <View style={{ flexDirection: "row" }}>
        <Pressable
          onPress={() => setGridSelected(true)}
          style={{
            flex: 1,
            borderBottomWidth: gridSelected ? 1 : 0,
            padding: 5,
          }}
        >
          <Text
            style={{
              fontWeight: gridSelected ? "600" : "400",
              fontSize: 17,
              textAlign: "center",
              opacity: !gridSelected ? 0.4 : 1,
            }}
          >
            Following
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setGridSelected(false)}
          style={{
            flex: 1,
            borderBottomWidth: !gridSelected ? 1 : 0,
            padding: 5,
          }}
        >
          <Text
            style={{
              fontWeight: !gridSelected ? "600" : "400",
              fontSize: 17,
              textAlign: "center",
              opacity: gridSelected ? 0.4 : 1,
            }}
          >
            You
          </Text>
        </Pressable>
      </View>

      {gridSelected ? (
        <ScrollView scrollEnabled showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "column",

              width: "100%",
            }}
          >
            {activityData.slice(0, activityData.length).map((item, index) => (
             
                <ActivityCard
                  username={item.username}
                  action={item.action}
                  text={item.text}
                />
              
            ))}
          </View>
        </ScrollView>
      ) : (
        <>
          <ActivityItem users={activityData} />
        </>
      )}
    </BaseScreen>
  );
};

export default reels;

const styles = StyleSheet.create({});
