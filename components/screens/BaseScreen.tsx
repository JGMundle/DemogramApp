import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from "react-native";
import React, { ReactNode } from "react";
import Constants from "expo-constants";
console.log(Constants);
interface Props {
  children: ReactNode;
}
const BaseScreen = ({ children }: Props) => {
  return <SafeAreaView style={styles.mainContainer}>{children}</SafeAreaView>;
};

export default BaseScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
});
