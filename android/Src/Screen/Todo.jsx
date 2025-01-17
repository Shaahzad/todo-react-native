import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Todo = () => {
  return (
    <SafeAreaView>
      <Text style={styles.heading}>Todo</Text>
    </SafeAreaView>
  )
}

export default Todo

const styles = StyleSheet.create({
   heading:{
     fontWeight: 'bold',
     fontSize: 50
   }
})