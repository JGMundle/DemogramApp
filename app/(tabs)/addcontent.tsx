import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  Animated,
  FlatList,
  ScrollView,
  Platform,
  Alert,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDeviceOrientation } from "@react-native-community/hooks";
import BaseScreen from "@/components/screens/BaseScreen";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import Typo from "@/components/basecomponents/Typo";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { Camera, CameraType, CameraView } from "expo-camera";
import { useRouter, useSegments } from "expo-router";
import { normalizeX, normalizeY } from "@/utils/normalize";
import { spacingX } from "@/config/spacing";

// This variable contains all the options for the features you see when using the camera
const cameraOptions = [
  { type: "Post" },
  { type: "Story" },
  { type: "Reel" },
  { type: "Live" },
];

const { width } = Dimensions.get("window")
const ITEM_WIDTH = 100
const SPACING = 10
const CENTER_OFFSET = (width - ITEM_WIDTH) /2 //This equals the middle of the screen



//camera modes


  const modes = ["Post", "Story", "Reel", "Live"];
const addcontent = () => {
  //iOS = screen and the window are the same value
  //android = screen and the window value are not the same
  const dim = Dimensions.get("screen");
  const orientation = useDeviceOrientation();
  const segments = useSegments();
  const router = useRouter();

  // Camera options 
  const scrollX = useRef(new Animated.Value(0))

  //0 -100 --> 0 to 1
  // 0 = 0
  // 0.5 = 50

  


  const [cameraMenuIndex, setCameraMenuIndex] = useState<number>(1);
  const [cameraPermission, setCameraPermission] = useState<boolean>();
  const [isCameraReady, setIsCameraReady] = useState<boolean>();

  const [micPermission, setMicPermission] = useState<boolean>();
  const [isMicReady, setIsMicReady] = useState<boolean>();
  const [facing, setFacing] = useState<CameraType>("back");

  // const [cameraRef, setCameraRef] = useState<Camera | null>(null)
  const cameraRef = useRef<CameraView | null>(null);
  // const handleCameraOptions = () => { };

  const handleCameraPermissions = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setCameraPermission(status === "granted"); // setCameraPermission(true)
  };

  const handleMicPermissions = async () => {
    const { status } = await Camera.requestMicrophonePermissionsAsync();
    setCameraPermission(status === "granted");
  };

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  // useEffect is a hook that runs after ALL of the UI logic in our component has been loaded/mounted
  useEffect(() => {
    //ComponentWillMount - The component is about to loaded on the screen
    //ComponentDidMount - All of the UI Logic of the component has been loaded
    //ComponentDidUnmount - All of the UI Logic has been removed from the screen
    //segments[0]=== current tab we are on
    //Async operations - 1. Client to Network, 2. Local Computer to file system or hardware in your computer
    if (segments[1] === "addcontent") {
      // /(tabs)/addcontent
      ///  [0], [1]
      handleCameraPermissions();
      handleMicPermissions();
      console.log("Permissions are set");
    }
  }, []);

  //What happens when the permissions are not granted
  if (cameraPermission === false) {
    return Alert.alert(
      "No access to camera",
      "Permission to use the camera has been denied"
    );
  }

  if (micPermission === false) {
    return Alert.alert(
      "No access to microphone",
      "Permission to use the mic has been denied"
    );
  }

  const handleCamera = () => {
    if (cameraRef.current) {
      cameraRef.current._onCameraReady();
    }
  };
  //Take a Photo
  const takePhoto = async () => {
    if (cameraRef.current) {
      // handleCamera();
      const newPhoto = await cameraRef.current.takePictureAsync();
      console.log("New Photo: ", newPhoto!.uri);
    }
  };


    type renderProps = {item: any, index: number}
    const renderItem = ({ item, index }: renderProps) => {
    const inputRange = [
      (index - 1) * ITEM_WIDTH,
      index * ITEM_WIDTH,
      (index + 1) * ITEM_WIDTH
    ]
    //This is for the horizontal scrolling left to right vise vera
    const scale = scrollX.current.interpolate({
      inputRange,
      outputRange: [0.8, 1, 0.8],
      extrapolate: "clamp" //keep the 0.8 values static no matter how many new items are in the list
    })

    const opacity = scrollX.current.interpolate({
      inputRange,
      outputRange: [0.5, 1, 0.5],
      extrapolate: "clamp"
    })

    return (
      <View style={{ width: ITEM_WIDTH }}>
        <Animated.Text style={[styles.modeText, { transform: [{ scale }], opacity }]}>
          {item}
        </Animated.Text>
      </View>
    )

  }
  //Take a Video

  // const handleRightSwipe = () => {};
  return (
    <>
      {/* // We need to use a camera ref so that we can access the properties of the camera of the device */}

      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: normalizeX(50),
      
          top: 50,
          zIndex: 100,
      
        }}
      >
        <Pressable
          onPress={() => router.push("/(tabs)/profile")}
          style={[{ flex: 1 }]}
        >
          <AntDesign name="close" size={normalizeX(30)} color={"blue"} />
        </Pressable>

        <Pressable>
          <Ionicons name={"settings-outline"} size={normalizeX(30)} color={"blue"} />
        </Pressable>
      </View>

      <View
        style={{ position: "absolute", bottom: normalizeY(50), right: normalizeX(139), zIndex: 100 }}
      >
        <TouchableOpacity onPress={takePhoto}>
          <Feather name="circle" size={normalizeX(60)} color={"whitesmoke"} />
        </TouchableOpacity>
      </View>

      <CameraView style={[styles.camera]} ref={cameraRef} facing={facing}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <AntDesign name="retweet" size={38} color={"whitesmoke"} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            alignContent: "center",
            backgroundColor: "gray",
            borderRadius: 20,
            paddingHorizontal: 30,
            position: "absolute",
            bottom: 10,
          }}
        >
          <FlatList
            contentContainerStyle={{
              paddingHorizontal: CENTER_OFFSET
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={modes}
            renderItem={renderItem}
            decelerationRate="fast"
            // onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }],
            //   {useNativeDriver: true}
            // )}
          />
        </View>
      </CameraView>
    </>
  )
}
export default addcontent;





const styles = StyleSheet.create({
  modeText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#000000"
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
    position: "absolute",
    zIndex: 100,
    right: 30,
    bottom: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
