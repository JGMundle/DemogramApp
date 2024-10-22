import BaseScreen from "@/components/screens/BaseScreen";
import { View, Text, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { FlatList } from "react-native";
import { ReactElement, useState } from "react";
import { userData } from "../data/userdata";
import UserStoryListItem from "@/components/UserStoryListItem";



interface UserStoryObject {
  id: number;
  username: string;
  userPicture: ReactElement,
  story: string[];
  // [...video1, ...video2]
}

const comments =  [
        "This amazing",
        "Looks expensive",
        "Looks like it smells good",
      ]



//Data Tray


export default function HomeScreen() {
 const [likeCount, setLikeCount] = useState<number>(0);
 const [isLiked, setIsLiked] = useState<boolean>(false);
 const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
 const [viewComments, setViewComments] = useState<boolean>(false);


  return (
    <BaseScreen>
      <View
        style={{
          padding: 5,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderWidth: 1,
          borderColor: "red",
        }}
      >
        <View>
          <Text>Instagram</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <FontAwesome
            name="plus-square-o"
            size={28}
            style={{ marginRight: 18 }}
          />
          <FontAwesome name="heart-o" size={28} style={{ marginRight: 12 }} />
        </View>
      </View>

      {/* Your story & Followings */}
      <View style={{ flexDirection: "row", borderWidth: 1 }}>
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

      {/* Posts */}
      
    </BaseScreen>
  );
}

const styles = StyleSheet.create({
  
});
