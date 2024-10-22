import { StyleSheet, Text, View, Image, ImageSourcePropType } from 'react-native'
import React, { ReactElement, useState } from 'react'
import { Ionicons, Entypo, AntDesign, FontAwesome, Feather } from '@expo/vector-icons';





interface IUsersPostObject {
    userProfilePicture: ReactElement
    username: string
    postTitle: string
    post: string 
    multiplePost?: Image[]

}

interface UserPostObject {

}
const UserPost = ({userProfilePicture, username, postTitle, post, multiplePost}: IUsersPostObject) => {

    const [likeCount, setLikeCount] = useState<number>(0);
    
  return (
      <View style={{ borderWidth: 1, borderColor: "blue", padding: 7 }}>
          {/* Posts */}
        <View style={{ alignItems: "center", gap: 220, flexDirection: "row" }}>
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            {userProfilePicture}
                  <Text style={{ fontWeight: 700 }}>{username}</Text>
          </View>

          <Entypo name="dots-three-horizontal" size={25} />
        </View>

    
    {/* Posts - single video, single image, or multiple videos and images */}
        {post && <Image
        source={{ uri: require(post)}} //Image Prop
          style={{ width: 400, height: 400 }}
        />}

        {/* Like, Comment, Share & Bookmark */}
        <View style={{ flexDirection: "row", gap: 240, marginTop: 7 }}>
          <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
            <AntDesign
              name="hearto"
              size={27}
              onPress={() => {
                setLikeCount(likeCount + 1);
              }}
            />
            <FontAwesome
              name="comment-o"
              size={27}
              style={{ transform: [{ scaleX: -1 }] }}
            />
            <Feather name="send" size={27} />
          </View>

          <Feather name="bookmark" size={27} />
        </View>

        {/* Description */}
        <View style={{ marginTop: 7 }}>
          <Text>{`${likeCount} likes`}</Text>
          <Text>
                  <Text style={{ fontWeight: "bold" }}>{username}</Text>
                  {postTitle}
          </Text>
        </View>

        <View style={{marginTop: 10}}>
          <Text style={{ color: "gray" }}>View all comments</Text>
          <Text style={{ color: "gray" }}>Just now</Text>
        </View>
      </View>
  )
}

export default UserPost

const styles = StyleSheet.create({})