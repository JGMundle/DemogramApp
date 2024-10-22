import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { ReactElement } from "react";




export interface CustomIconProps {
    size?: number
    color?: string
    name?: keyof typeof Ionicons.glyphMap
}

const IconComponent = ({size, color, name}: CustomIconProps) => {
  return (
      <Ionicons name={name ?? "person-outline"} size={size ?? 50} color={color ?? "black"} /> 
  )
}

export default IconComponent

const styles = StyleSheet.create({})