import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { ResizeMode, Video } from 'expo-av'

const VideoScreen = () => {
    const videoRef = useRef<Video>(null)
  return (
    <View style={{flex: 1, justifyContent:"center"}}>
      <Video
        ref={videoRef}
        style={{width: "100%", height: 300}}
        source={require("@/assets/images/PexelVideos/Video5.mp4")}
        useNativeControls //it contains the native controls for ios and android
        resizeMode={ResizeMode.COVER}
        isLooping
      />
    </View>
  )
}

export default VideoScreen

const styles = StyleSheet.create({})