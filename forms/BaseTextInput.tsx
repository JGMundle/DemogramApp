import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputFocusEventData,
  View,
} from "react-native";
import React from "react";
import Animated from "react-native-reanimated";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { spacingX, spacingY } from "@/config/spacing";

//Aim: Create a reusable form text input field that we can change the base properties of

interface Props {
  keyboardType: KeyboardTypeOptions;
  secureTextEntry: boolean;
  useIcon: boolean;
  iconName: keyof typeof MaterialCommunityIcons.glyphMap; //Access the glyphMap keys
  placeholder: string;
  placeholderTextColor?: string;
    onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    onChangeText: (text: string) => void
    value: any
}

const BaseTextInput = ({
  keyboardType,
  secureTextEntry = false,
  onBlur,
  useIcon = true,
  iconName,
  placeholder,
    placeholderTextColor,
    value,
  onChangeText
}: Props) => {
  return (
    <Animated.View style={styles.container}>
      {useIcon && (
        <MaterialCommunityIcons name={iconName} size={24} color="black" />
      )}
      <TextInput
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        onBlur={onBlur}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
              style={styles.input}
              onChangeText={onChangeText}
              value={value}
      />
    </Animated.View>
  );
};

export default BaseTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAFAFA",
    alignItems: "center",
    flexDirection: "row",
    padding: 12,
    marginVertical: 10,
    borderRadius: 3,
    borderColor: "gray",
        borderWidth: 1,
    
    },
    
  input: {
    paddingLeft: spacingX._7,
    paddingVertical: spacingY._7,
    textAlign: "left",
    width: "90%",
  },
});
