import MainUserPost from "@/components/MainUserPost";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import {
  View,
  FlatList,
  TouchableWithoutFeedback,
  Text,
  StatusBar,
  StyleSheet,
  Platform,
} from "react-native";
import Constants from "expo-constants";

const data = [
  {
    userProfilePicture: <FontAwesome name="user-circle" size={27} />,
    username: "Juewell",
    postTitle: "It's a great day for jerk chicken",
    post: require("../../assets/images/Container-2.jpeg"),
    comment: [
      "This amazing",
      "Looks expansive",
      "Hope it can contain my cream",
    ],
  },
  {
    userProfilePicture: <FontAwesome name="user-circle" size={27} />,
    username: "Juewell",
    postTitle: "It's a great day for jerk chicken",
    post: require("../../assets/images/Container-3.jpeg"),
    comment: [
      "This amazing",
      "Looks expansive",
      "Hope it can contain my cream",
    ],
  },
  {
    userProfilePicture: <FontAwesome name="user-circle" size={27} />,
    username: "Juewell",
    postTitle: "It's a great day for jerk chicken",
    post: require("../../assets/images/coffeeMachine.jpg"),
    comment: ["This amazing", "Looks expensive", "Looks like it smells good"],
  },
  {
    userProfilePicture: <FontAwesome name="user-circle" size={27} />,
    username: "Juewell",
    postTitle: "It's a great day for jerk chicken",
    post: require("../../assets/images/coffeeMachine.jpg"),
    comment: ["This amazing", "Looks expensive", "Looks like it smells good"],
  },
  {
    userProfilePicture: <FontAwesome name="user-circle" size={27} />,
    username: "Juewell",
    postTitle: "It's a great day for jerk chicken",
    post: require("../../assets/images/coffeeMachine.jpg"),
    comment: ["This amazing", "Looks expensive", "Looks like it smells good"],
  },
  {
    userProfilePicture: <FontAwesome name="user-circle" size={27} />,
    username: "Juewell",
    postTitle: "It's a great day for jerk chicken",
    post: require("../../assets/images/coffeeMachine.jpg"),
    comment: ["This amazing", "Looks expensive", "Looks like it smells good"],
  },
  {
    userProfilePicture: <FontAwesome name="user-circle" size={27} />,
    username: "Juewell",
    postTitle: "It's a great day for jerk chicken",
    post: require("../../assets/images/coffeeMachine.jpg"),
    comment: ["This amazing", "Looks expensive", "Looks like it smells good"],
  },
  {
    userProfilePicture: <FontAwesome name="user-circle" size={27} />,
    username: "Juewell",
    postTitle: "It's a great day for jerk chicken",
    post: require("../../assets/images/coffeeMachine.jpg"),
    comment: ["This amazing", "Looks expensive", "Looks like it smells good"],
  },
  {
    userProfilePicture: <FontAwesome name="user-circle" size={27} />,
    username: "Juewell",
    postTitle: "It's a great day for jerk chicken",
    post: require("../../assets/images/coffeeMachine.jpg"),
    comment: ["This amazing", "Looks expensive", "Looks like it smells good"],
  },
  {
    userProfilePicture: <FontAwesome name="user-circle" size={27} />,
    username: "Juewell",
    postTitle: "It's a great day for jerk chicken",
    post: require("../../assets/images/coffeeMachine.jpg"),
    comment: ["This amazing", "Looks expensive", "Looks like it smells good"],
  },
];
const profile = () => {
  console.log(Constants.statusBarHeight);
  return (
    <View style={styles.mainContainer}>
      <TouchableWithoutFeedback
        onPress={() => console.log("Touchable without feedback")}
      >
        <Text>Click here</Text>
      </TouchableWithoutFeedback>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View>
            <MainUserPost
              userProfilePicture={item.userProfilePicture}
              username={item.username}
              postTitle={item.postTitle}
              post={item.post}
              comments={item.comment}
            />
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
    marginTop: Platform.OS === "android" ? StatusBar["currentHeight"] : 0,
  },
});
export default profile;
