
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface Props { 
    isVisible: boolean
    setIsVisible?: () => void
}

const FilteringModal = ({isVisible, setIsVisible}: Props) => {
  return (
    <Modal transparent animationType="slide" visible={isVisible}>
          <TouchableOpacity>
              
      </TouchableOpacity>
    </Modal>
  );
}

export default FilteringModal

const styles = StyleSheet.create({})