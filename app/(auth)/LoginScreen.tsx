import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import BaseScreen from "@/components/screens/BaseScreen";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Colors } from "@/constants/Colors";
import AppButton from "@/components/basecomponents/AppButton";
import { router } from "expo-router";
import { spacingX, spacingY } from "@/config/spacing";
import { Entypo } from "@expo/vector-icons";
import BaseForm from "@/forms/BaseForm";
import login from "@/api/login";
import { loginValidationSchema } from "@/validation/validationSchema";
import BaseTextInput from "@/forms/BaseTextInput";
import BaseFormField from "@/forms/BaseFormField";

interface LoginResponse {
  token: string;
}
const LoginScreen = () => {
  const [error, setError] = useState<string>("");
  //We need a Controller component because we need to access the value prop and onChangeText prop
  //to pass into the TextInput Field

  //control - The form's state controller

  const handleSubmit = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      const response = await login(email, password);
      if (!response.ok) {
        setError(response.problem);
      }

      const data = await response.data;
      return data;
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };
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
        <BaseForm
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={loginValidationSchema}
        >
          <BaseFormField
            iconName="email"
            keyboardType="email-address"
            placeholder="Enter your email"
            fieldname="email"
            secureTextEntry={false}
            useIcon
          />

          <BaseFormField
            iconName="key"
            keyboardType="default"
            placeholder="Enter your password"
            fieldname="password"
            secureTextEntry
            useIcon
          />
        </BaseForm>

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
    width: "90%",
  },
});
