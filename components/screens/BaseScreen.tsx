import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'


interface Props {
    children: ReactNode
}
const BaseScreen = ({children}: Props) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
        {children}
    </SafeAreaView>
  );
}

export default BaseScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    marginTop: Platform.OS === "android" ? 45 : 0
  },
});