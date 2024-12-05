import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { Formik, FormikConfig, FormikHelpers } from "formik";

interface Props {
  initialValues: {};
  onSubmit: (
    values: any,
    formikHelpers: FormikHelpers<any>
  ) => void | Promise<any>;
  validationSchema: any;
  children: ReactNode;
}
const BaseForm = ({
  initialValues, //Store the initial field values e.g {email: "", password: ""}
  onSubmit,
  validationSchema,
  children,
}: Props) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {() => <>{children}</>}
    </Formik>
  );
};

export default BaseForm;

const styles = StyleSheet.create({});
