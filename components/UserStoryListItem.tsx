import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { ReactElement } from 'react'
import { UserStoryObject } from '@/app/data/userdata'
import { ViewStyle } from 'react-native'
import IconComponent from '@/app/data/IconComponent'
interface Props {
    user: UserStoryObject
    index: number,
    styleProp?: ViewStyle
    _onPress: () => void
}
const UserStoryListItem = ({user, index, styleProp, _onPress, ...otherProps}: Props) => {
  return (

      <TouchableOpacity style={[styles.mainContainer, styleProp]} onPress={_onPress} {...otherProps}>
        <View>{user.userPicture}</View>
          <Text>{user.username}</Text>
        
      </TouchableOpacity>
    
  );
}

export default UserStoryListItem

const styles = StyleSheet.create({
    mainContainer: {
           flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          marginRight: 10,
        },
    
})