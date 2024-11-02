import { StyleSheet, Text, TextProps, View } from 'react-native'
import React, { ReactElement } from 'react'


interface Props {
    children: ReactElement | string
    style?: TextProps["style"]
    lines?: number
}
const Typo = ({children, style, lines, ...props}: Props) => {
  return (
      <Text
          adjustsFontSizeToFit
          numberOfLines={lines} style={[styles.baseText, style]}
        {...props}
      >{children}</Text>
  
  )
}

export default Typo

const styles = StyleSheet.create({
    baseText: {
        color: "black"
    }
})

