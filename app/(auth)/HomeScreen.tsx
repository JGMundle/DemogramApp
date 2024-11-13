import { StyleSheet, Text, View, Image, Button } from "react-native";
import React from "react";
import BaseScreen from "@/components/screens/BaseScreen";
import { Colors } from "@/constants/Colors";
import Animated from "react-native-reanimated";
import { useRouter } from "expo-router";
import AppButton from "@/components/basecomponents/AppButton";
const HomeScreen = () => {
  const router = useRouter();
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

          <Text style={{marginTop: 15}}>Username</Text>

          <AppButton
            customStyle={{ width: "80%", borderRadius: 3, marginTop: 10, padding: 10 }}
            title="Log in"
            onPress={() => router.push("/(auth)/LoginScreen")}
          />

          <Text style={{ fontWeight: "600", color: Colors.dodgerBlue, marginTop: 40 }}>
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
    marginTop: 50
  },
  loginBtn: {
    width: "100%",
  },
});
