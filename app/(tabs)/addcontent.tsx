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
// import Animated from "react-native-reanimated";

const cameraOptions = [
  { type: "Post" },
  { type: "Story" },
  { type: "Reel" },
  { type: "Live" },
];

const addcontent = () => {
  //iOS = screen and the window are the same value
  //android = screen and the window value are not the same
  const dim = Dimensions.get("screen");
  const orientation = useDeviceOrientation();
  const segments = useSegments();
  const router = useRouter();

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
        style={{position: "absolute", bottom: normalizeY(50), right: normalizeX(139), zIndex: 100}}
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
              flexDirection: "row",
              gap: 10,
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={cameraOptions}
            renderItem={({ item }) => (
              <View>
                <Text style={{ fontSize: 18 }}>{item.type}</Text>
              </View>
            )}
          />
        </View>
      </CameraView>
    </>
  );
};

export default addcontent;

const styles = StyleSheet.create({
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
