import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import BaseScreen from "@/components/screens/BaseScreen";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Colors } from "@/constants/Colors";
import AppButton from "@/components/basecomponents/AppButton";
import { router } from "expo-router";
import { spacingX, spacingY } from "@/config/spacing";
import { Entypo } from "@expo/vector-icons";

const schema = z.object({
  username: z
    .string()
    .min(2, { message: "Username should be atleast more than 2 characters" }),
  password: z
    .string()
    .min(6, { message: "Password should be atleast more than 6 characters" }),
});

type loginData = z.infer<typeof schema>;

const LoginScreen = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<loginData>({ resolver: zodResolver(schema) });
  //We need a Controller component because we need to access the value prop and onChangeText prop
  //to pass into the TextInput Field

  //control - The form's state controller
  return (
    <BaseScreen>
      <View
        style={{
          alignItems: "center",
          maxHeight: 550,
          marginTop: 130,
          height: "90%",
        }}
      >
        <Text style={{ fontSize: 30, marginBottom: 50 }}>Instagram</Text>
        <Controller
          control={control}
          name="username"
          rules={{ required: "Username is required" }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Username"
              placeholderTextColor={"gray"}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={{ required: "Password is required" }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Password"
              placeholderTextColor={"gray"}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
              secureTextEntry
            />
          )}
        />

        <Text
          style={{
            fontWeight: "600",
            color: Colors.dodgerBlue,
            marginTop: 5,
            alignItems: "flex-end",
            marginBottom: 40,
          }}
        >
          Forgot password?
        </Text>

        <AppButton
          title="Log in"
          customStyle={{ width: "90%", borderRadius: 4, paddingVertical: 13 }}
          onPress={() => router.navigate("/")}
        />

        <View
          style={{
            flexDirection: "row",
            marginTop: 40,
            alignItems: "center",
            marginVertical: 20,
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              borderWidth: StyleSheet.hairlineWidth,
              height: 1,
              flex: 1,
              backgroundColor: Colors.lightGrayBG,
              marginRight: spacingX._10,
              borderRadius: 7,
              borderCurve: "continuous",
            }}
          />

          <Text>OR</Text>

          <View
            style={{
              borderWidth: StyleSheet.hairlineWidth,
              height: 1,
              flex: 1,
              backgroundColor: Colors.lightGrayBG,
              marginLeft: spacingX._10,
              borderRadius: 7,
              borderCurve: "continuous",
            }}
          />
        </View>

        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <Entypo name="facebook" size={25} color={"#3797EF"} />
          <Text style={{ fontWeight: "600", color: Colors.dodgerBlue }}>
            Log in with Facebook
          </Text>
        </View>
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
    </BaseScreen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 3,
    paddingLeft: spacingX._7,
    paddingVertical: spacingY._7,
    borderColor: "gray",
    backgroundColor: "#FAFAFA",
    marginBottom: 10,
    textAlign: "left",
    width: "90%"
  },
});
