import {
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
  Dimensions,
  Image as RNImage
} from "react-native";
import React, { useCallback, useEffect, useState,  } from "react";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { images, videos } from "@/utils/imageArray";
import { normalizeX } from "@/utils/normalize";
import { Video } from "expo-av";
import { Image } from "expo-image";
import {
  Asset,
  getAlbumAsync,
  getAlbumsAsync,
  getAssetsAsync,
} from "expo-media-library";

const { width } = Dimensions.get("window");
const numOfPostColumns = 4;
const imagePostSize = Math.round(width / numOfPostColumns);

const AddImage = () => {
  const [pictureSelect, setPictureSelect] = useState<number>(39);
  const [gridSelected2, setGridSelected2] = useState<number>(0);
  //0 - recents
  //1 - Images
  //2 - Video

  const [assets, setAssets] = useState<Asset[]>([]);


  type assetImageArray = Pick<Asset, "uri">


  const getAlbums = useCallback(async () => {
    // We get the albums
    const fetchedAlbum = await getAlbumsAsync({
      includeSmartAlbums: true,
    });

    //Recents
    //useCallback
    //memoization
    const userAlbumAssets = await getAssetsAsync({
      album: fetchedAlbum.find((album) => album.title === "Recentsd"), //find the recents album by its title
      mediaType: ["video", "photo"],
      sortBy: "creationTime",
    });
    setAssets(userAlbumAssets.assets);
  }, [gridSelected2]);

  useEffect(() => {
    getAlbums();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {/* Title, cancel and done */}
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          justifyContent: "space-evenly",
          gap: 30,
          padding: 10,
        }}
      >
        <Pressable onPress={() => router.back()}>
          <Text style={{ fontSize: 20 }}>Cancel</Text>
        </Pressable>

        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 20, fontWeight: "600" }}>Recents</Text>
          <MaterialCommunityIcons name="chevron-down" size={30} />
        </View>

        <Pressable>
          <Text style={{ fontSize: 20, color: Colors.dodgerBlue }}>Next</Text>
        </Pressable>
      </View>

      {/* Large Image Selector */}
      <View
        style={{
          width: "100%",
          height: "50%",

          position: "relative",
        }}
      >
        <Image
          allowDownscaling
          source={require("@/assets/images/People/person1.jpg")}
          style={{
            objectFit: "cover",
            aspectRatio: 1,
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        />

        <View style={styles.imageOptions}>
          <Pressable
            style={{
              backgroundColor: Colors.defaultGrayBG,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: normalizeX(10),
              borderRadius: 40,
            }}
          >
            <Ionicons name="copy" size={24} />
            <Text style={{ fontWeight: "500", padding: 4 }}>
              SELECT MULTIPLE
            </Text>
          </Pressable>

          <Pressable
            style={{
              backgroundColor: Colors.defaultGrayBG,
              borderRadius: 50,
              padding: normalizeX(4),
            }}
          >
            <Feather name="camera" size={27} />
          </Pressable>
        </View>
      </View>
      {/* End of Large Image Selector */}
      {gridSelected2 === 0 && (
        <FlatList
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={20}
          overScrollMode="always"
          scrollToOverflowEnabled
          numColumns={numOfPostColumns}
          contentContainerStyle={{ height: "100%", overflow: "scroll" }}
          data={assets}
          renderItem={({ item }) => (
            <View>
              <Image source={ item.uri } />
              {/* <RNImage source={{uri: item.uri}} />  */}
            </View>
          )}
        />
      )}

      {gridSelected2 > 0 && (
        <FlatList
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={20}
          overScrollMode="always"
          scrollToOverflowEnabled
          data={gridSelected2 === 1 ? images : videos}
          numColumns={numOfPostColumns}
          contentContainerStyle={{ height: "100%", overflow: "scroll" }}
          renderItem={({ item, index }) => (
            <Pressable
              style={{ width: imagePostSize, height: imagePostSize }}
              onPress={() => setPictureSelect(index)}
            >
              {gridSelected2 === 2 ? (
                <Video
                  source={item.url}
                  style={{ width: imagePostSize, height: imagePostSize }}
                />
              ) : gridSelected2 === 1 ? (
                <Image
                  source={item.url}
                  style={{ width: imagePostSize, height: imagePostSize }}
                />
              ) : <></>}
            </Pressable>
          )}
        />
      )}

      {/* Bottom tab */}
      <View
        style={{
          position: "absolute",
          bottom: "15%",
          backgroundColor: "whitesmoke",
          width: "100%",
          height: 65,
          overflowX: "hidden",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          {/* Library btn */}
          <Pressable onPress={() => setGridSelected2(0)}>
            <Text
              style={{
                fontWeight: gridSelected2 === 0 ? "600" : "400",
                fontSize: 20,
                textAlign: "center",
                opacity: gridSelected2 !== 0 ? 0.4 : 1,
              }}
            >
              Library
            </Text>
          </Pressable>

          {/* Photo btn */}
          <Pressable onPress={() => setGridSelected2(1)}>
            <Text
              style={{
                fontWeight: gridSelected2 === 1 ? "600" : "400",
                fontSize: 20,
                textAlign: "center",
                opacity: gridSelected2 !== 1 ? 0.4 : 1,
              }}
            >
              Photo
            </Text>
          </Pressable>

          {/* Video  Btn*/}
          <Pressable onPress={() => setGridSelected2(2)}>
            <Text
              style={{
                fontWeight: gridSelected2 === 2 ? "600" : "400",
                fontSize: 20,
                textAlign: "center",
                opacity: gridSelected2 !== 2 ? 0.4 : 1,
              }}
            >
              Video
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default AddImage;

const styles = StyleSheet.create({
  imageOptions: {
    zIndex: 10,
    position: "absolute",
    right: 10,
    bottom: 10,
    flexDirection: "row",
    gap: 10,
  },
});
