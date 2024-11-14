import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import BaseScreen from "@/components/screens/BaseScreen";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";

const EditProfile = () => {
  return (
    <BaseScreen>
      {/* Title, cancel and done */}
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          justifyContent: "space-evenly",
          gap: 30,
          padding: 10,
        }}
      >
        <Pressable onPress={() => router.back()}>
          <Text style={styles.Text}>Cancel</Text>
        </Pressable>

        <Text style={{ fontSize: 20, fontWeight: "600" }}>Edit Profile</Text>

        <Pressable onPress={() => router.push("/(tabs)/profile")}>
          <Text style={{ fontSize: 20, color: Colors.dodgerBlue }}>Done</Text>
        </Pressable>
      </View>

      {/* Details */}
      <View style={{ backgroundColor: "whitesmoke" }}>
        {/* Profile picture */}
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../assets/images/Pexel/pexels-img4.jpg")}
            style={{ width: 100, height: 100, borderRadius: 50, marginTop: 50 }}
          />

          <Text
            style={{
              fontSize: 15,
              color: Colors.dodgerBlue,
              fontWeight: "600",
              marginTop: 16,
            }}
          >
            Change Profile Photo
          </Text>
        </View>

        <View
          style={{
            borderWidth: 0.5,
            borderRadius: 1,
            borderColor: "gray",
            marginTop: 20,
          }}
        />

        {/* User info */}
        <View style={{ marginTop: 10, marginLeft: 10, flexDirection: "row" }}>
          <View style={styles.DetailContainer}>
            <Text style={styles.DetailText}>Name</Text>
            <Text style={styles.DetailText}>Username</Text>
            <Text style={styles.DetailText}>Website</Text>
            <Text style={styles.DetailText}>Bio</Text>
          </View>

          <View style={styles.DetailContainer}>
            <TextInput placeholder="Name" style={styles.placeHolderText} />

            <TextInput placeholder="Username" style={styles.placeHolderText} />

            <TextInput placeholder="Website" style={styles.placeHolderText} />

            <TextInput placeholder="Bio" style={styles.placeHolderText} />
          </View>
        </View>

        <View
          style={{
            marginTop: 10,
            borderWidth: 0.5,
            borderRadius: 1,
            borderColor: "gray",
          }}
        />

        <Text
          style={{
            color: Colors.dodgerBlue,
            fontSize: 18,
            marginTop: 15,
            marginLeft: 20,
          }}
        >
          Switch to Professional Account
        </Text>

        {/* Private info */}
        <Text
          style={{
            marginTop: 35,
            marginLeft: 20,
            fontSize: 18,
            fontWeight: "600",
          }}
        >
          Private Information
        </Text>

        <View style={{ marginTop: 10, marginLeft: 10, flexDirection: "row" }}>
          <View style={styles.DetailContainer}>
            <Text style={styles.DetailText}>Email</Text>
            <Text style={styles.DetailText}>Phone</Text>
            <Text style={styles.DetailText}>Gender</Text>
          </View>

          <View style={styles.DetailContainer}>
            <TextInput placeholder="Email" style={styles.placeHolderText} />
            <TextInput placeholder="Phone" style={styles.placeHolderText} />
            <TextInput placeholder="Gender" style={styles.placeHolderText} />
          </View>
        </View>
      </View>
    </BaseScreen>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  Text: { fontSize: 20 },

  DetailContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 20,
    padding: 10,
  },

  DetailText: {
    fontSize: 18,
  },

  placeHolderText: {
    fontSize: 18,
    flex: 1,
    borderBottomWidth: 0.5,
    width: "300%",
  },
});
