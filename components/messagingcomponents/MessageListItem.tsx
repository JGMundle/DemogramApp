import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Animated from "react-native-reanimated";
import profile from "../Suggestedposts";
import { Colors } from "@/constants/Colors";
import { spacingX, spacingY } from "@/config/spacing";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
  profileImg: number;
  username: string;
  message: string;
  timestamp: string;
}
const MessageListItem = ({
  profileImg,
  username,
  message,
  timestamp,
}: Props) => {
  return (
    <Animated.View
      style={{
        position: "relative",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: spacingY._10,
      }}
    >
      {/* Image view */}
      <View
        style={{
          borderWidth: 2,
          borderColor: "gray",
          padding: 2,
          marginRight: spacingX._5,
          borderRadius: 50,
        }}
      >
        <Image
          source={profileImg}
          style={{ width: 50, height: 50, borderRadius: 50 }}
        />
      </View>

      {/* Username and message view */}
      <View style={{ width: "85%" }}>
        <Text>{username}</Text>
        {/* Horiziontal Text View */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",

            width: "100%",
          }}
        >
          <Text style={{ color: "gray" }} numberOfLines={1}>
            {message.substring(0, 31)}...
          </Text>
          <View style={{flexDirection: "row", alignItems: "center"}}>
          <Text style={{ color: "gray", right: 30 }}>{timestamp}</Text>
            <Feather name="camera" size={30} color="gray" style={{right: 9}} />
          </View>
        </View>
      </View>
    </Animated.View>
  );
};

export default MessageListItem;

const styles = StyleSheet.create({});
