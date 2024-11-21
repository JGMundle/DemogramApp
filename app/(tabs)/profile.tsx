import {
  FlatList,
  Image,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert
} from "react-native";
import React, { useState } from "react";
import Constants from "expo-constants";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Typo from "@/components/basecomponents/Typo";
import { router } from "expo-router";

import ImageArrayComponent from "@/components/ImageArrayComponent";
import * as ImagePicker from "expo-image-picker";

//Screen Dimension Logic
const { width } = Dimensions.get("window");
const numOfPostColumns = 3;
const imagePostSize = Math.round(width / numOfPostColumns);
console.log(imagePostSize);

const pictureBucket = [
  { img: require("../../assets/images/Icecream1.jpeg") },
  { img: require("../../assets/images/Icecream2.jpeg") },
  { img: require("../../assets/images/Icecream1.jpeg") },
  { img: require("../../assets/images/Icecream1.jpeg") },
  { img: require("../../assets/images/Icecream1.jpeg") },
  { img: require("../../assets/images/Icecream1.jpeg") },
];

export const photoBucket = [
  { img: require("../../assets/images/Pexel/pexels-img1.jpg") },
  { img: require("../../assets/images/Pexel/pexels-img2.jpg") },
  { img: require("../../assets/images/Pexel/pexels-img3.jpg") },
  { img: require("../../assets/images/Pexel/pexels-img4.jpg") },
  { img: require("../../assets/images/Pexel/pexels-img5.jpg") },
  { img: require("../../assets/images/Pexel/pexels-img6.jpg") },
  { img: require("../../assets/images/Pexel/pexels-img7.jpg") },
  { img: require("../../assets/images/Pexel/pexels-img8.jpg") },
  { img: require("../../assets/images/Pexel/pexels-img9.jpg") },
];

const profile = () => {
  const [gridSelected, setGridSelected] = useState<boolean>(true);
  const [capturedImage, setCapturedImage] = useState<ImagePicker.ImagePickerAsset[]>([]);
  const [images, setImages] = useState<ImagePicker.ImagePickerAsset[]>([]);
  const [rnImages, setRnImages] = useState<string | undefined>("");
  const [openMenuDrawer, setOpenMenuDrawer] = useState<boolean>(false)

  const menuOptions = ["Logout", "Search Picks", "All Posts"]

  // const rnImagePicker = async () => {
  //   launchImageLibrary(
  //     { mediaType: "photo", selectionLimit: 10, quality: 1 },
  //     (response) => {
  //       if (response.didCancel) {
  //         alert("Cancelled Operation"); //If the permission has been cancelled, you won't be able to use the camera for the app
  //       } else if (response.errorCode) {
  //         alert(`Error occured while picking image: ${response.errorCode}`); //In case there's an error that occoured
  //       } else if (response && response.assets) {
  //         setRnImages(response.assets[0].uri); //Image successfully loaded
  //       }
  //     }
  //   );
  // };

  const openImagePicker = async () => {
    // Request permission from our user
    const permissions = await ImagePicker.requestCameraPermissionsAsync();
    if (!permissions.granted) {
      alert("Permissions to access your media library is required"); //This shows an alert on a screen about accessing your media library
      return;
    }

    //Open Image Picker
    const imagePickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true, //Give permission to edit photos/videos
      quality: 1, //The quality of the picture
      aspect: [4, 3], //Size of the picture frame
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (imagePickerResult.assets) {
      setImages(imagePickerResult.assets);
    }
  };

  const openCamera = async () => {
    const { status } = await ImagePicker.getCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Camera Permissions",
        "Permissions for camera usage is denied!"
      ); //Gives you an alert (with some extra details) about camera permissions and displays a message if denied
      return;
    }

    const camera = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, //PNG, JPEG, or any other type of file can be chosen
      allowsEditing: true, //Give permission to edit photos/videos
      quality: 1, //The quality of the picture
      aspect: [4, 3], //Size of the picture frame
    });

    if (camera.assets) {
      setCapturedImage(camera.assets); //We're adding the image to the database where the image can be used from anytime
    }
  };


  return (
    <View style={styles.mainContainer}>
      {/* Username, Settings & Threads */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          gap: 130,
          alignItems: "center",
          paddingBottom: 9,
          paddingRight: 15,
        }}
      >
        <Text style={{ fontSize: 14, fontWeight: "bold" }}>Username</Text>

        <FontAwesome
          name="navicon"
          size={28}
          onPress={() => setOpenMenuDrawer(!openMenuDrawer)}
        />
      </View>

      {openMenuDrawer && (
        <View
          style={{
            position: "absolute",
            borderWidth: 2,
            backgroundColor: "whitesmoke",
            top: 60,
            right: 10,
            zIndex: 10,
            gap: 10,
          }}
        >
          {menuOptions.map((option, index) => (
            <Pressable
              key={index}
              onPress={() =>
                index === 0
                  ? router.navigate("/(auth)/HomeScreen")
                  : index === 1 ? router.push("/SearchPicks") : index === 2 && router.push("/(screens)/AddImage")
              }
            >
              <Text style={{ fontWeight: "600", fontSize: 15 }}>{option}</Text>
            </Pressable>
          ))}
        </View>
      )}

      {/* Your Profile */}
      <View
        style={{
          marginTop: 5,
          paddingLeft: 15,
          paddingBottom: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 40,
          }}
        >
          <FontAwesome name="user-circle" size={60} />

          <View style={styles.socialMetric}>
            <Text style={{ fontWeight: "bold" }}>500</Text>
            <Typo>
              <Text>Posts</Text>
            </Typo>
          </View>

          <View style={styles.socialMetric}>
            <Text style={{ fontWeight: "bold" }}>500</Text>
            <Typo>
              <Text>Followers</Text>
            </Typo>
          </View>

          <View style={styles.socialMetric}>
            <Text style={{ fontWeight: "bold" }}>500</Text>
            <Typo>
              <Text>Following</Text>
            </Typo>
          </View>
        </View>

        <View>
          <Text style={{ fontSize: 15, fontWeight: "bold", marginTop: 20 }}>
            Description
          </Text>

          <Typo>
            <Text>sub-description</Text>
          </Typo>
        </View>
      </View>

      <Pressable
        style={styles.editProfileBtn}
        onPress={() => router.push("/EditProfile")}
      >
        <Typo style={{ fontWeight: "bold" }}>
          <Text>Edit Profile</Text>
        </Typo>
        {/* <Typo lines={4} style={{ color: "blue", fontSize: 16 }}>
          <Text>Edit Profile</Text>
        </Typo> */}
      </Pressable>

      {/* What the user's into */}
      <View
        style={{
          marginTop: 30,
          paddingLeft: 15,
          borderBottomWidth: 1,
          borderBottomColor: "gray",
          paddingBottom: 10,
        }}
      >
        <Pressable onPress={() => router.navigate("/(tabs)/addcontent")}>
          <View
            style={{
              flexDirection: "column",
              // borderWidth: 1,
              alignItems: "flex-start",
            }}
          >
            <View style={{ alignItems: "center" }}>
              <SimpleLineIcons name="plus" size={50} />
              <Text style={{ alignItems: "center" }}>New</Text>
            </View>
          </View>
        </Pressable>
      </View>

      <View style={{ flexDirection: "row" }}>
        <Pressable
          onPress={() => setGridSelected(true)}
          style={{
            flex: 1,
            borderBottomWidth: gridSelected ? 1 : 0,
            padding: 5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons name="grid" size={30} />
          </View>
        </Pressable>

        <Pressable
          onPress={() => setGridSelected(false)}
          style={{
            flex: 1,
            borderBottomWidth: !gridSelected ? 1 : 0,
            padding: 5,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="person-outline" size={30} />
          </View>
        </Pressable>
      </View>
      {/* End of Post selector */}

      {/* Posts and Likes Section */}
      {gridSelected ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={pictureBucket}
          numColumns={numOfPostColumns}
          contentContainerStyle={styles.imageGrid}
          renderItem={({ item }) => (
            <View style={{ width: imagePostSize, height: imagePostSize }}>
              <Image source={item.img} style={styles.image} />
            </View>
          )}
        />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          scrollEnabled
          data={photoBucket}
          numColumns={numOfPostColumns}
          contentContainerStyle={styles.imageGrid}
          renderItem={({ item }) => (
            <View style={{ width: imagePostSize, height: imagePostSize }}>
              <Image style={styles.image} source={item.img} />
            </View>
          )}
        />
      )}
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
  editProfileBtn: {
    borderWidth: 1,
    borderRadius: 4,
    alignItems: "center",
    padding: 3,
    width: "90%",
    alignSelf: "center",
  },

  socialMetric: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  imageGrid: {
    marginTop: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    margin: 1
  }
});
