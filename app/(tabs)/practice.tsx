import { StyleSheet, Text, View, Dimensions, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDeviceOrientation } from "@react-native-community/hooks";
const practice = () => {
  //iOS = screen and the window are the same value
  //android = screen and the window value are not the same
  const dim = Dimensions.get("screen");
  const orientation = useDeviceOrientation();

  return (
    <View
      style={{
        backgroundColor: "whitesmoke",
        flex: 1,
              flexDirection: orientation === "landscape" ? "row" : "column",
              justifyContent: "flex-end", //y-axis
              alignItems: "stretch", 
      }}
    >
      <View style={{ backgroundColor: "green", width: 120, height: 120 }} />
      , <View style={{ backgroundColor: "crimson", width: 120}} />
      , <View style={{ backgroundColor: "gold", width: 120, height: 120 }} />
    </View>
  );
};

export default practice;

const styles = StyleSheet.create({});
