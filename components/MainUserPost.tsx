import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
  Pressable,
} from "react-native";
import React, { ReactElement, useState } from "react";
import {
  Ionicons,
  Entypo,
  AntDesign,
  FontAwesome,
  Feather,
} from "@expo/vector-icons";
import { FlatList } from "react-native";
import IconComponent from "@/app/data/IconComponent";

export const userPostData = [
  // {
  //   userProfilePicture: IconComponent({size: 25, color:"black"}),
  //   username: "Juewell",
  //   postTitle: "It's a great day for jerk chicken",
  //   post: require("../assets/images/Jerk1.jpeg"),
  //   comment: ["This amazing", "Soo Delicious", "My mouth is watering"],
  // },
  // {
  //   userProfilePicture: IconComponent({size: 25, color:"black"}),
  //   username: "Juewell",
  //   postTitle: "It's a great day for jerk chicken",
  //   post: require("../assets/images/Jerk2.jpeg"),
  //   comment: ["This amazing", "Soo Delicious", "My mouth is watering"],
  // },
  // {
  //   userProfilePicture: IconComponent({size: 25, color:"black"}),
  //   username: "Juewell",
  //   postTitle: "It's a great day for jerk chicken",
  //   post: require("../assets/images/Jerk3.jpeg"),
  //   comment: ["This amazing", "Soo Delicious", "My mouth is watering"],
  // },
  //   {
  //     userProfilePicture: <FontAwesome name="user-circle" size={27} />,
  //     username: "Juewell",
  //     postTitle: "It's a great day for jerk chicken",
  //     post: require("../../assets/images/Icecream1.jpeg"),
  //     comment: ["This amazing", "Soo Delicious", "My mouth is watering"],
  //   },
  //   {
  //     userProfilePicture: <FontAwesome name="user-circle" size={27} />,
  //     username: "Juewell",
  //     postTitle: "It's a great day for jerk chicken",
  //     post: require("../../assets/images/Icecream1.jpeg"),
  //     comment: ["This amazing", "Soo Delicious", "My mouth is watering"],
  //   },
  //   {
  //     userProfilePicture: <FontAwesome name="user-circle" size={27} />,
  //     username: "Juewell",
  //     postTitle: "It's a great day for jerk chicken",
  //     post: require("../../assets/images/Icecream2.jpeg"),
  //     comment: ["This amazing", "Soo Delicious", "My mouth is watering"],
  //   },
  //   {
  //     userProfilePicture: <FontAwesome name="user-circle" size={27} />,
  //     username: "Juewell",
  //     postTitle: "It's a great day for jerk chicken",
  //     post: require("../../assets/images/Icecream3.jpeg"),
  //     comment: ["This amazing", "Soo Delicious", "My mouth is watering"],
  //   },
  //   {
  //     userProfilePicture: <FontAwesome name="user-circle" size={27} />,
  //     username: "Juewell",
  //     postTitle: "It's a great day for jerk chicken",
  //     post: require("../../assets/images/Container-1.jpeg"),
  //     comment: [
  //       "This amazing",
  //       "Looks expansive",
  //       "Hope it can contain my cream",
  //     ],
  //   },
  //   {
  //     userProfilePicture: <FontAwesome name="user-circle" size={27} />,
  //     username: "Juewell",
  //     postTitle: "It's a great day for jerk chicken",
  //     post: require("../../assets/images/Container-2.jpeg"),
  //     comment: [
  //       "This amazing",
  //       "Looks expansive",
  //       "Hope it can contain my cream",
  //     ],
  //   },
  //   {
  //     userProfilePicture: <FontAwesome name="user-circle" size={27} />,
  //     username: "Juewell",
  //     postTitle: "It's a great day for jerk chicken",
  //     post: require("../../assets/images/Container-3.jpeg"),
  //     comment: [
  //       "This amazing",
  //       "Looks expansive",
  //       "Hope it can contain my cream",
  //     ],
  //   },
  //   {
  //     userProfilePicture: <FontAwesome name="user-circle" size={27} />,
  //     username: "Juewell",
  //     postTitle: "It's a great day for jerk chicken",
  //     post: require("../../assets/images/coffeeMachine.jpeg"),
  //     comment: [
  //       "This amazing",
  //       "Looks expensive",
  //       "Looks like it smells good",
  //     ],
  //   },
];

interface IUsersPostObject {
  userProfilePicture: ReactElement;
  username: string;
  postTitle: string;
  post: ImageSourcePropType;
  comments?: string[];
  multiplePost?: string[];
}

const MainUserPost = ({
  userProfilePicture,
  username,
  postTitle,
  post,
  comments,
  multiplePost,
}: IUsersPostObject) => {
  const [likeCount, setLikeCount] = useState<number>(0);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [viewComments, setViewComments] = useState<boolean>(false);

  return (
    <View style={{ borderWidth: 1, borderColor: "blue", padding: 7 }}>
        <View style={{ alignItems: "center", gap: 220, flexDirection: "row" }}>
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <View>
              <FontAwesome name="user" />
            </View>
            <Text style={{ fontWeight: 700 }}>Juewell</Text>
          </View>

          <Entypo name="dots-three-horizontal" size={25} />
        </View>

        {/* <Image
          source={require("../../assets/images/Jerk1.jpeg")}
          style={{ width: 400, height: 400 }}
        /> */}

        {/* Like, Comment, Share & Bookmark */}
        <View style={{ flexDirection: "row", gap: 240, marginTop: 7 }}>
          <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
            <AntDesign
              name={!isLiked ? "hearto" : "heart"}
              color={!isLiked ? "black" : "red"}
              size={27}
              onPress={() => {
                setIsLiked(!isLiked); //toggle effect
                likeCount === 0
                  ? setLikeCount(likeCount + 1)
                  : setLikeCount(likeCount - 1);
              }}
            />

            <FontAwesome
              name="comment-o"
              size={27}
              style={{ transform: [{ scaleX: -1 }] }}
            />
            <Feather name="send" size={27} />

            <FontAwesome
              name={!isBookmarked ? "bookmark-o" : "bookmark"}
              size={27}
              onPress={() => setIsBookmarked(!isBookmarked)}
            />
          </View>

          {/* Description */}
          <View style={{ marginTop: 7 }}>
            <Text>{`${likeCount} likes`}</Text>
            <Text>
              <Text style={{ fontWeight: "bold" }}>Juewell</Text>
              Good Cookin
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <Pressable onPress={() => setViewComments(!viewComments)}>
            <Text style={{ color: "gray" }}>
              {!viewComments ? "View all comments" : "Hide Comments"}
            </Text>
          </Pressable>
        </View>

        {!viewComments ? (
          comments?.slice(0, 1).map((comment) => <Text>{comment}</Text>)
        ) : (
          <FlatList
              data={comments}
              keyExtractor={item => item}
            renderItem={({ item }) => <View>{item} </View>}
          />
        )}
      </View>
  );
};

export default MainUserPost

const styles = StyleSheet.create({});
