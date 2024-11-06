import { FlatList, Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { ReactElement, useState } from 'react'
import { FontAwesome, Entypo, AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { router, useGlobalSearchParams, useLocalSearchParams } from 'expo-router';
import Typo from '@/components/basecomponents/Typo';
import { Colors } from '@/constants/Colors';

interface IUsersPostObject {
  userProfilePicture: ReactElement;
  username: string;
  postTitle: string;
  post: ImageSourcePropType;
  comments?: string[];
  multiplePost?: string[];
}

const UserPostDetailsScreen = () => {
  const [likeCount, setLikeCount] = useState<number>(0);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
    const [viewComments, setViewComments] = useState<boolean>(false);
    
    const itemData = useLocalSearchParams()
    console.log(itemData.url)

    //NodeRequire is the return type of require("url.com") is a number

  return (
    <View style={{ borderColor: "blue", padding: 7 }}>
        <View style={{ alignItems: "center", gap: 220, flexDirection: "row" }}>
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <View>
              <FontAwesome name="user" />
            </View>
            <Text style={{ fontWeight: 700 }}>Juewell</Text>
          </View>

          <Entypo name="dots-three-horizontal" size={25} />
          </View>  
          <Pressable onPress={() => router.back()}>
              <MaterialCommunityIcons name="chevron-left" size={32} style={{backgroundColor: Colors.darkGrayBG}} />
          </Pressable>
        <Image
          source={Number(itemData.url)}
          style={{ width: 400, height: 400 }}
        />

      
      <View>
        <Text>{String(itemData.name)}</Text>
        <Text>£{Number(itemData.price)}</Text>
      </View>
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

        {/* {!viewComments ? (
          comments?.slice(0, 1).map((comment) => <Text>{comment}</Text>)
        ) : (
          <FlatList
              data={comments}
              keyExtractor={item => item}
            renderItem={({ item }) => <View>{item} </View>}
          />
        )} */}
      </View>
  );
};

export default UserPostDetailsScreen

const styles = StyleSheet.create({})