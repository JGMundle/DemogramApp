import { KeyboardTypeOptions, StyleSheet, Text, View } from "react-native";
import React from "react";
import BaseTextInput from "./BaseTextInput";
import { useFormikContext } from "formik";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
  fieldname: string;
  keyboardType: KeyboardTypeOptions;
  secureTextEntry: boolean;
  useIcon: boolean;
  iconName: keyof typeof MaterialCommunityIcons.glyphMap; //Access the glyphMap keys
  placeholder: string;
  placeholderTextColor?: string;
}
const BaseFormField = ({
  fieldname,
  keyboardType,
  secureTextEntry,
  useIcon,
  iconName,
  placeholder,
  placeholderTextColor,
  ...props
}: Props) => {
  const { setFieldValue, touched, errors, values, setFieldTouched } =
    useFormikContext();
  //setFieldValue = sets the current field to the text being received from the users input
  return (
    <>
      <BaseTextInput
        onBlur={() => setFieldTouched(fieldname)}
        onChangeText={(text) => setFieldValue(fieldname, text)}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        useIcon={useIcon}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
              iconName={iconName}
              value={(values as any)[fieldname]}
      />
    </>
  );
};

export default BaseFormField;

const styles = StyleSheet.create({});
