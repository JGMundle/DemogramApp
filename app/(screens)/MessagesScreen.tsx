import { StyleSheet, Text, View, TextInput, Pressable, Animated } from "react-native";
import React from "react";
import BaseScreen from "@/components/screens/BaseScreen";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { spacingX, spacingY } from "@/config/spacing";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";
import { ActivityCard } from "@/components/ActivityItem";
import { FlatList } from "react-native";
import MessageListItem from "@/components/messagingcomponents/MessageListItem";
import  { FadeIn } from "react-native-reanimated";

// const activityData: User[] = [
//     { username: "kareen", action: UserActions.LIKED_POST, text: "liked post" },
//     { username: "john", action: UserActions.LIKED_POST, text: "liked post" },
// ]

const messages = [
  {
    id: 1,
    profilePhoto: require("@/assets/images/People/person1.jpg"),
    username: "joshua_l",
    messages: ["Have a nice a day, bro!", "Hi"],
    timestamp: "now",
  },
  {
    id: 2,
    profilePhoto: require("@/assets/images/People/person2.jpg"),
    username: "karenne",
    messages: ["I heard this is a good movie, so lets go what it", "What's up"],
    timestamp: "now",
  },
  {
    id: 3,
    profilePhoto: require("@/assets/images/People/person3.jpg"),
    username: "martini_rond",
    messages: ["This design looks cool", "Hi"],
    timestamp: "now",
  },
  {
    id: 4,
    profilePhoto: require("@/assets/images/People/person4.jpg"),
    username: "andrewww_",
    messages: ["Sounds good", "Hi"],
    timestamp: "20m",
  },
  {
    id: 5,
    profilePhoto: require("@/assets/images/People/person5.jpg"),
    username: "maxjacobson",
    messages: ["Thank you bro", "Let's go!"],
    timestamp: "2h",
  },
  {
    id: 6,
    profilePhoto: require("@/assets/images/People/person6.jpg"),
    username: "joshua_l",
    messages: ["Have a nice a day, bro!", "Hi"],
    timestamp: "now",
  },
  {
    id: 7,
    profilePhoto: require("@/assets/images/People/person7.jpg"),
    username: "karenne",
    messages: ["I heard this is a good movie, so lets go what it", "What's up"],
    timestamp: "now",
  },
  {
    id: 8,
    profilePhoto: require("@/assets/images/People/person3.jpg"),
    username: "martini_rond",
    messages: ["This design looks cool", "Hi"],
    timestamp: "now",
  },
  {
    id: 9,
    profilePhoto: require("@/assets/images/People/person4.jpg"),
    username: "andrewww_",
    messages: ["Sounds good", "Hi"],
    timestamp: "20m",
  },
  {
    id: 10,
    profilePhoto: require("@/assets/images/People/person6.jpg"),
    username: "maxjacobson",
    messages: ["Thank you bro", "Let's go!"],
    timestamp: "2h",
  },
];

const MessagesScreen = () => {
  return (
    <BaseScreen>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: spacingY._10,
        }}
      >
        <Pressable onPress={() => router.back()}>
          <MaterialCommunityIcons name="chevron-left" size={46} />
        </Pressable>

        <Text style={{ fontWeight: "600", fontSize: 20 }}>Username</Text>

        <Ionicons name="add" size={38} />
      </View>

      <View style={{ backgroundColor: "whitesmoke" }}>
        <View style={styles.searchBar}>
          <MaterialCommunityIcons name="magnify" size={25} />
          <TextInput placeholder="Search" style={styles.inputField} />
        </View>

        <Animated.FlatList
          data={messages}
          horizontal={false}
          scrollEnabled
          contentContainerStyle={{
            marginHorizontal: spacingX._15,
            marginTop: spacingY._20,
          }}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <MessageListItem
              profileImg={item.profilePhoto}
              message={item.messages[0]}
              username={item.username}
              timestamp={item.timestamp}
            />
          )}
        />
        {/* Bottom Tab */}
        <Animated.View
          style={{
            position: "absolute",
            bottom: 0,
            backgroundColor: "whitesmoke",
            width: "100%",
            maxHeight: "20%",
            height: 80,
          }}
        >
          <Pressable>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                alignSelf: "center",
                marginTop: 2,
              }}
            >
              <MaterialCommunityIcons
                name="camera"
                color={Colors.dodgerBlue}
                size={28}
              />
              <Text style={{ color: Colors.dodgerBlue }}>Camera</Text>
            </View>
          </Pressable>
        </Animated.View>
      </View>
    </BaseScreen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  inputField: {
    paddingRight: spacingX._15,
  },

  searchBar: {
    backgroundColor: Colors.defaultGrayBG,
    marginHorizontal: spacingY._20,
    marginVertical: spacingY._5,
    gap: spacingX._10,
    borderRadius: spacingY._10,
    paddingLeft: spacingX._5,
    borderWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center",
  },
});
