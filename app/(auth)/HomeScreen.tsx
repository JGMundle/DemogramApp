import { StyleSheet, Text, View, Image, Button } from "react-native";
import React, { useEffect } from "react";
import BaseScreen from "@/components/screens/BaseScreen";
import { Colors } from "@/constants/Colors";
import Animated from "react-native-reanimated";
import { useRouter } from "expo-router";
import AppButton from "@/components/basecomponents/AppButton";
import { handleNavigationAfterPermissions } from "@/utils/permissions";
import { useCameraPermissions, useMicrophonePermissions } from "expo-camera";
import { usePermissions } from "expo-media-library";
import { Alert, Linking } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useMediaLibraryPermissions } from "expo-image-picker";

const HomeScreen = () => {
  const [cameraPersmissions, requestCameraPermissions] = useCameraPermissions();
  const [microphonePermissions, requestMicrophonePermission] =
    useMicrophonePermissions();
  const [mediaLibraryPermission, requestMediaLibraryPermission] =
    useMediaLibraryPermissions();

  const requestAllUserPermissions = async () => {
    //Camera
    const cameraStatus = await requestCameraPermissions();
    if (!cameraStatus.granted) {
      Alert.alert(
        "Camera Permissions",
        "Camera permission is required to use this app"
      );
      return false;
    }

    //Microphone
    const micStatus = await requestMicrophonePermission();
    if (!micStatus.granted) {
      Alert.alert(
        "Microphone Permissios",
        "Microphone permission is required to use this app"
      );
      return false;
    }

    //Media Library
    const mediaStatus = await requestMediaLibraryPermission();
    if (!mediaStatus.granted) {
      Alert.alert(
        "Media Library Permissions",
        "Media Library permission is required to use this app",
      
      );
      return false;
    }

    await AsyncStorage.setItem("userPermissionsGranted", "true");
    return true;
  };

  const handleNavigationAfterPermissions = async () => {
    // const permissionToken = await AsyncStorage.getItem(
    //   "userPermissionsGranted"
    // );
    // if (permissionToken) return;
    // console.log(permissionToken);

    const permissionGranted = await requestAllUserPermissions();
    console.log(permissionGranted);
    if (permissionGranted) {
      return;
    } else {
      Alert.alert(
        "No Permissions Provided",
        "Please provide permissions via your settings",
        [
          // Give Permission Button
          {
            text: "Give Permission",
            onPress: () => requestAllUserPermissions(),
            style: "default",
          },

          //Open Settings
          {
            text: "Go To Settings",
            onPress: () => Linking.openSettings(), // Link us the to settings of th device
          },
        ]
      );
    }
  };

  //1. Camera Permissions
  //2. Media Library Permissions
  //3. Microphone Permissions
  useEffect(() => {
  handleNavigationAfterPermissions()
  }, []);
  return (
    <BaseScreen>
      <Animated.View>
        <View
          style={{
            alignItems: "center",
            maxHeight: 550,
            marginTop: 190,
            height: "90%",
          }}
        >
          <Text style={{ fontSize: 30 }}>Instagram</Text>

          <Image
            source={require("../../assets/images/Pexel/pexels-img4.jpg")}
            style={styles.Img}
          />

          <Text style={{ marginTop: 15 }}>Username</Text>

          <AppButton
            customStyle={{
              width: "80%",
              borderRadius: 3,
              marginTop: 10,
              padding: 10,
            }}
            title="Log in"
            onPress={() => router.push("/(auth)/LoginScreen")}
          />

          <Text
            style={{
              fontWeight: "600",
              color: Colors.dodgerBlue,
              marginTop: 40,
            }}
          >
            Switch accounts
          </Text>
        </View>

        <View
          style={{
            alignItems: "center",
            maxHeight: 50,
            flex: 0.2,
            borderTopWidth: 0.5,
            paddingTop: 15,
          }}
        >
          <Text style={{ color: "gray" }}>
            Don't have an account?{" "}
            <Text style={{ fontWeight: "600", color: "#0f0f0f" }}>Sign up</Text>
          </Text>
        </View>
      </Animated.View>
    </BaseScreen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  Img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 50,
  },
  loginBtn: {
    width: "100%",
  },
});
