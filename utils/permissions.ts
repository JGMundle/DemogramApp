
import { useCameraPermissions, useMicrophonePermissions } from "expo-camera";
import { usePermissions } from "expo-media-library";
import { Alert, Linking } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { router } from "expo-router";

const [cameraPersmissions, requestCameraPermissions] = useCameraPermissions()
const [microphonePermissions, requestMicrophonePermission] = useMicrophonePermissions()
const [mediaLibraryPermission, requestMediaLibraryPermission] = usePermissions()


export const requestAllUserPermissions = async () => {
    //Camera
    const cameraStatus = await requestCameraPermissions()
    if (!cameraStatus.granted) {
        Alert.alert("Camera Permissions", "Camera permission is required to use this app")
        return false
    }

    //Microphone
    const micStatus = await requestMicrophonePermission()
    if (!micStatus.granted) {
        Alert.alert("Microphone Permissios", "Microphone permission is required to use this app") 
        return false
    }

    //Media Library
    const mediaStatus = await requestMediaLibraryPermission()
    if (!mediaStatus.granted) {
        Alert.alert("Media Library Permissions", "Media Library permission is required to use this app")
        return false
    }

    await AsyncStorage.setItem("userPermissionsGranted", "true")
    return true
}


export const handleNavigationAfterPermissions = async () => {
    const permissionToken = await AsyncStorage.getItem("userPermissionsGranted")
    if (permissionToken) return 
    console.log(permissionToken)
    
    const permissionGranted = await requestAllUserPermissions()
    console.log(permissionGranted)
    if (permissionGranted) {
        return
        
    } else {
        Alert.alert("No Permissions Provided", "Please provide permissions via your settings", [
        // Give Permission Button
            {
                text: "Give Permission",
                onPress: () => requestAllUserPermissions(),
                style: "default",
            },

            //Open Settings
            {
                text: "Go To Settings",
                onPress: () => Linking.openSettings() // Link us the to settings of th device
            }

        ])
    }
}

//1. Camera Permissions
//2. Media Library Permissions
//3. Microphone Permissions