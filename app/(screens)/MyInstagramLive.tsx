import { StyleSheet, Text, View, Pressable, TextInput, Alert } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { AntDesign, Entypo, Feather, FontAwesome, FontAwesome6, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { router, useSegments } from "expo-router"
import { Camera, CameraView } from 'expo-camera';
import { normalizeY } from '@/utils/normalize';


const MyInstagramLive = () => {
  const [cameraPermission, setCameraPermission] = useState<boolean>();

  const cameraRef = useRef<CameraView | null>(null);

  const segments = useSegments();

    const handleCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setCameraPermission(status === "granted"); // setCameraPermission(true)
    };

  useEffect(() => {
    if (segments[1] === "MyInstagramLive") {
      handleCameraPermissions()
    }
  }, [])
  
  if (cameraPermission === false) {
    return Alert.alert(
      "No access to camera", "Permission to use the camera has been denied"
    )
  }

  const takePhoto = async () => {
    if (cameraRef.current) {
      const newPhoto = await cameraRef.current.takePictureAsync()
    }
  }

  return (
    <View>
      <CameraView style={{ width: "100%", height: normalizeY(670), borderRadius: 15 }} ref={cameraRef}>
        {/* Top tabs */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 20,
            marginTop: 20,
            gap: 40,
          }}
        >
          <FontAwesome6 name="rotate" size={28}/>

          {/* Live, Viewers and Close */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              marginLeft: 60,
            }}
          >
            {/* Remeber to ask Michael about how we get linear gradient colours */}
            <Text
              style={{
                borderWidth: 1,
                paddingVertical: 5,
                paddingHorizontal: 9,
                borderRadius: 5,
                color: "whitesmoke"
              }}
            >
              LIVE
            </Text>
            <View
              style={{
                borderWidth: 1,
                paddingVertical: 5,
                paddingHorizontal: 9,
                borderRadius: 5,
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
              }}
            >
              <FontAwesome name="eye" size={18} color={"whitesmoke"} />
              <Text style={{color: "whitesmoke"}}>0</Text>
            </View>
          </View>

          <Pressable onPress={() => router.back()} style={{ marginLeft: 60 }}>
            <Text style={{ fontWeight: "500", fontSize: 20, color: "whitesmoke" }}>End</Text>
          </Pressable>
        </View>
      </CameraView>

      {/* Bottom tab */}
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#0f0f0f",
          padding: 10,
          gap: 50,
        }}
      >
        <View
          style={{
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            paddingRight: 80,
          }}
        >
          <TextInput placeholder="Comment" placeholderTextColor={"gray"} />

          <Entypo name="dots-three-horizontal" size={17} color={"whitesmoke"} />
        </View>

        <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
          <Ionicons name="copy-outline" size={30} color={"whitesmoke"} />

          <Feather name="send" size={27} color={"whitesmoke"} />

          <MaterialIcons
            name="insert-emoticon"
            size={28}
            color={"whitesmoke"}
          />

          <Feather name="square" size={28} color={"whitesmoke"} />
        </View>
      </View>
    </View>
  );
}

export default MyInstagramLive

const styles = StyleSheet.create({})