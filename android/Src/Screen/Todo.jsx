import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo';


const Todo = () => {
  return (
    <SafeAreaView>
      <Text style={styles.heading}>Todo</Text>
      <TextInput placeholder="Add Todo" style={styles.input} />
      <TouchableOpacity>
        <Text style={styles.button}>Add</Text>
      </TouchableOpacity>
      <ScrollView style={styles.Itemcontainer} showsVerticalScrollIndicator={false}>
        <View style={styles.Item}>
          <Text>Todo 1</Text>
          <View style={styles.IconsContainer}>
          <Icon name="trash" size={20} color="red" />
          <Icon name="edit" size={20} color="blue" />
          </View>
        </View>
        <View style={styles.Item}>
          <Text>Todo 1</Text>
          <View style={styles.IconsContainer}>
          <Icon name="trash" size={20} color="red" />
          <Icon name="edit" size={20} color="blue" />
          </View>
        </View>
        <View style={styles.Item}>
          <Text>Todo 1</Text>
          <View style={styles.IconsContainer}>
          <Icon name="trash" size={20} color="red" />
          <Icon name="edit" size={20} color="blue" />
          </View>
        </View>
        <View style={styles.Item}>
          <Text>Todo 1</Text>
          <View style={styles.IconsContainer}>
          <Icon name="trash" size={20} color="red" />
          <Icon name="edit" size={20} color="blue" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Todo

const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    margin: 10,
    borderRadius: 10
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  },
  Itemcontainer: {
    padding: 10,
    margin: 10,
  },
  Item: {
    padding: 12,
    margin: 12,
    borderRadius: 10,
    boxShadow: '0px 0px 10px 0px black',
    fontSize: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  IconsContainer:{
    flexDirection: 'row', 
    gap: 10
  }
})