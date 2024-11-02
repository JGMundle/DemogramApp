import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

interface Props {
    user: string
    text: string
    targetuser?: string
}


const ActivityItemGroup = ({text, user, targetuser}: Props) => {
  return (
    <View
      style={{
        marginTop: 9,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 0.5,
        padding: 12,
      }}
    >
      <Ionicons name="people-outline" size={40} />
      <Text style={{ fontWeight: "600" }}>{user}</Text>

      <Text>
       {`${text}`}
      </Text>
    </View>
  );
}

export default ActivityItemGroup

const styles = StyleSheet.create({})