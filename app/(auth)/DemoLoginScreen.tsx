import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BaseTextInput from '@/forms/BaseTextInput'

const DemoLoginScreen = () => {
  return (
    <View>
          <BaseTextInput placeholder='This is a record' placeholderTextColor='blue' keyboardType='default'
              useIcon iconName='wrap' secureTextEntry />
    </View>
  )
}

export default DemoLoginScreen

const styles = StyleSheet.create({})