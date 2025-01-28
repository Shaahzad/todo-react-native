import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
import Icon from 'react-native-vector-icons/Entypo';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, editTodo, removeTodo } from '../Redux/TodoSlice';


const Todo = () => {
  const [todos, setTodos] = useState('')
  const [isedit, setisEdit] = useState(false)
  const [edittodoid, setEditTodoid] = useState(null)
  const dispatch = useDispatch()
  const todo = useSelector((state) => state.todo.todos)
  const GenerateUniqueId = () => Date.now() + Math.floor(Math.random() * 10000)
  const AddTodoHandler = () => {
    if(!todos) {
      return alert('Please enter a todo')
    } 
    dispatch(addTodo({
      id: GenerateUniqueId(),
      title: todos.trim()
    }))
    setTodos('')
  }

  const EditTodoHandler = () => {
    dispatch(editTodo({
      id: edittodoid,
      title: todos
    }))
    setTodos('')
    setisEdit(false)
    setEditTodoid(null)
  }
  const RemoveTodo = (id) => {
    dispatch(removeTodo(id))
  }
  const EditHandler = (id, title) => {
    setTodos(title)
    setisEdit(true)
    setEditTodoid(id)
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Todo</Text>
      <TextInput placeholder="Add Todo" style={styles.input} onChangeText={setTodos}  value={todos}/>
      <TouchableOpacity>
        <Text style={styles.button} onPress={isedit ? EditTodoHandler : AddTodoHandler}>{isedit ? 'Edit Todo' : 'Add Todo'}</Text>
      </TouchableOpacity>
      <ScrollView style={styles.Itemcontainer} showsVerticalScrollIndicator={false}>
        {todo.map((todo) => (
           <View style={styles.Item} key={todo.id}>
           <Text>{todo.title}</Text>
           <View style={styles.IconsContainer}>
            <Icon name="trash" size={20} color="red" onPress={() => RemoveTodo(todo.id)}/>
            <Icon name="edit" size={20} color="blue" onPress={()=> EditHandler(todo.id, todo.title)}/>
           </View>
         </View>
        )
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Todo

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    boxShadow: '0px 0px 10px 0px black',
  },
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
