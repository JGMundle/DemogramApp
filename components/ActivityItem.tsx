import { StyleSheet, Text, View, Image, Platform } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { radius, spacingX, spacingY } from "@/config/spacing";
import { normalizeX, normalizeY } from "@/utils/normalize";

///{ action: "liked_post", text: "liked the post"}

enum UserActions {
  LIKED_POST = "liked_Post",
  LIKED_VIDEO = "liked_video",
  LIKED_COMMENT = "liked_comment",
}

interface User {
  username?: string;
  action?: UserActions;
  text?: string;
}
interface Props {
  users: User[];
}

export const ActivityCard = ({ username, action, text }: User) => {
  return (
    <View
      style={{
        marginTop: 9,
        flexDirection: "row",
        alignItems: "center",
        flexGrow: 1,
        borderBottomWidth: 0.5,
        padding: 12,
        width: "100%",
        borderBottomColor: "gray",
      }}
    >
      <Image
        width={ normalizeY(40)}
        height={ normalizeY(40)}
        style={{
          objectFit: "contain",
          maxHeight: normalizeY(40),
          maxWidth: normalizeY(40),
          marginRight: 10,
          borderRadius: 50,
        }}
        alt="user"
        source={require("../assets/images/Pexel/KoreanBackAlley.jpg")}
      />
      <Text style={{ fontWeight: "600" }}>{username} </Text>
      <Text>{text}</Text>
    </View>
  );
};

const ActivityItem = ({ users }: Props) => {
  return (
    <View
      style={{
        marginTop: 9,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: normalizeX(0.5),
        padding: 12,
      }}
    >
      <Image
        width={normalizeY(40)}
        height={normalizeY(40)}
        style={{
          objectFit: "contain",
          maxHeight: normalizeY(40),
          maxWidth: normalizeY(40),
          marginRight: spacingX._10,
          borderRadius: radius._25,
        }}
        alt="user"
        source={require("../assets/images/Pexel/KoreanBackAlley.jpg")}
      />
      <View>
        {users.length > 1 ? (
          users.slice(0, 2).map((user, index) => (
            <View key={index}>
              <Text style={{ fontWeight: 600 }}>{user.username} and </Text>
            </View>
          ))
        ) : users.length < 1 ? (
          users
            .slice(0)
            .map((user, index) => (
              <ActivityCard key={index} username={user.username} />
            ))
        ) : (
          <></>
        )}
        <Text>{users.length} others like your post</Text>
      </View>
    </View>
  );
};

export default ActivityItem;

const styles = StyleSheet.create({});
