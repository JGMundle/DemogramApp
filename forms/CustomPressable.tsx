import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { useFormikContext } from 'formik'
import Animated from 'react-native-reanimated'


interface Props {
    onPress: () => void
    style?: StyleProp<ViewStyle>;
    children: ReactNode
}
const CustomPressable = ({onPress, style, children, ...props}: Props) => {

  return (
      <Pressable style={({pressed}) => [{opacity: pressed ? 0.5 : 1.0}, style]}>
         {children}
      </Pressable>
  )
}

export default CustomPressable

const styles = StyleSheet.create({})