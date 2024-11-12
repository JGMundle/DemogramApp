import {
  Button,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { ButtonProps } from "react-native";
import { spacingX } from "@/config/spacing";

interface Props {
  title: string;

  onPress: () => void;
  titleColor?: string;
  customStyle?: StyleProp<ViewStyle>;
}
const AppButton = ({
  title,
  titleColor,
  customStyle,
  onPress,
  ...props
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.defaultBtnContainer, customStyle]}
    >
      <Text style={{ color: titleColor ?? "white" }}>{title}</Text>
    </Pressable>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  defaultBtnContainer: {
    backgroundColor: Colors.dodgerBlue,
    padding: spacingX._5,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
