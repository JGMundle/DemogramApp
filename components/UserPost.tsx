import { StyleSheet, Text, View, Image, ImageSourcePropType } from 'react-native'
import React, { ReactElement, useState } from 'react'
import { Ionicons, Entypo, AntDesign, FontAwesome, Feather } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';





interface IUsersPostObject {
  username: string
  postTitle: string
  // post: string 
  // userProfilePicture?: ReactElement

}


const UserPost = ({username, postTitle}: IUsersPostObject) => {

  const [likeCount, setLikeCount] = useState<number>(0);
  const [commentCount, setCommentCount] = useState<number>(0)
  const [shareCount, setShareCount] = useState<number>(0)
    
  return (
    <Animated.View style={{ padding: 7 }}>
      {/* Posts */}
      <View
        style={{
          alignItems: "center",
          gap: 245,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <View style={{ alignItems: "center", flexDirection: "row" }}>
          <Ionicons name={"person-outline"} size={30} />
          <Text style={{ fontWeight: 700 }}>{username}</Text>
        </View>

        <Entypo name="dots-three-horizontal" size={25} />
      </View>

      {/* Post - single video, single image, or multiple videos and images */}
     
        <Image
          source={require("../assets/images/Pexel/PersonInTheSunset.jpg")}
          style={{ width: "100%", height: "70%" }}
        />
      

      {/* Like, Comment, Share & Bookmark */}
      <View style={{ flexDirection: "row", gap: 160, marginTop: 7 }}>
        <View style={{ flexDirection: "row", gap: 18, alignItems: "center" }}>
          {/* Likes */}
          <View style={styles.socialBtn}>
            <AntDesign
              name="hearto"
              size={27}
              onPress={() => {
                setLikeCount(likeCount + 1);
              }}
            />
            <Text style={styles.counts}>{likeCount}</Text>
          </View>

          {/* Comments */}
          <View style={styles.socialBtn}>
            <FontAwesome
              name="comment-o"
              size={27}
              style={{ transform: [{ scaleX: -1 }] }}
            />

            <Text style={styles.counts}>{commentCount}</Text>
          </View>

          {/* Shares */}
          <View style={styles.socialBtn}>
            <Feather name="send" size={27} />
          
            <Text style={styles.counts}>{shareCount}</Text>
          </View>

        </View>

        <Feather name="bookmark" size={27} />
      </View>

      {/* Description */}
      <View style={{ marginTop: 7 }}>
        <Text>
          <Text style={{ fontWeight: "bold" }}>{username} </Text>
          {postTitle}
        </Text>
      </View>

      <View style={{ marginTop: 10 }}>
        <Text style={{ color: "gray" }}>View all comments</Text>
        <Text style={{ color: "gray" }}>Just now</Text>
      </View>
    </Animated.View>
  );
}

export default UserPost

const styles = StyleSheet.create({
  socialBtn: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 5,
  },  

  counts: {
    fontWeight: "600",
    fontSize: 16,
  },
});