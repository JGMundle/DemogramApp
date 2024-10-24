import { StyleSheet, Text, View, Dimensions, Button, FlatList, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDeviceOrientation } from "@react-native-community/hooks";
import BaseScreen from "@/components/screens/BaseScreen";
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

  return (
    <BaseScreen>
      <View></View>

      <ScrollView>
        <FlatList
          contentContainerStyle={{
            flexDirection: "row",
            gap: 10,
            backgroundColor: "gray",
            borderRadius: 20,
            paddingHorizontal: 30,
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={cameraOptions}
          renderItem={({ item }) => (
            <View>
              <Text>{item.type}</Text>
            </View>
          )}
        />
      </ScrollView>
    </BaseScreen>
  );
};

export default addcontent;

const styles = StyleSheet.create({});
