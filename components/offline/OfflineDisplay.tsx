import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNetInfo } from "@react-native-community/netinfo";
import { Colors } from "@/constants/Colors";
import Constants from "expo-constants";
const OfflineDisplay = () => {

  const networkInfo = useNetInfo();
  // !== unknown is true for a few seconds when you first connect to the internet or disconnect from the internet
  //
  if (
    networkInfo.type !== "unknown" &&
    networkInfo.isInternetReachable === false
  )
    //!networkInfo.isInternetReachable (NOT CORRECT) --> networkInfo.isInternetReachable === false
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          backgroundColor: Colors.dodgerBlue,
          position: "absolute",
          top: Constants.statusBarHeight,
          zIndex: 1,
        }}
      >
        <Text style={{color: "whitesmoke"}}>OfflineDisplay</Text>
      </View>
    );

  return null; //if the internet is connected then we display no error message
};

export default OfflineDisplay;

const styles = StyleSheet.create({});
