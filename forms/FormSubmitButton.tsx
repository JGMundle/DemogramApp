import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomPressable from "./CustomPressable";
import { useFormikContext, FormikValues } from "formik";

const FormSubmitButton = <T extends FormikValues>({
  label,
}: {
  label: string;
}) => {
  const { handleSubmit } = useFormikContext<T>();
  return (
    <CustomPressable onPress={handleSubmit}>
      <Text>{label}</Text>
    </CustomPressable>
  );
};

export default FormSubmitButton;

const styles = StyleSheet.create({});
