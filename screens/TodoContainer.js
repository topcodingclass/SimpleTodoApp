import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo'
import Header from '../components/Header'


const TodoContainer = (props) => {
  const [todos, setTodos] = useState([]);
  const { data } = props.route.params;
  console.log('Screen starts')
  console.log(props)
  console.log(data)
  //setTodos([...data]);

  const addTodo = todo =>{
    console.log('Adding', todo)
    const newTodo ={
      title: todo,
      completed: false,
      created: Date.now()
    }
    console.log(todos)
    setTodos([...todos,newTodo])
  }

  const onToggleComplete = index =>{
    console.log('Toggle', index)
    const alltodos = todos;
    const todo = todos[index];
    todo.completed = !todo.completed;
    alltodos[index]=todo;
    setTodos([...alltodos]);
    console.log(todos)
  }

  const onDeleteTodo = index =>{
    console.log('Toggle', index)
    const alltodos = todos;
    todos.splice(index,1)
    setTodos([...alltodos]);
    console.log(todos)
  }


  return (
    <View>
    <Header title="To Do App"/>
    <View style={styles.container}>      
      <AddTodo add={addTodo} />
      <TodoList data ={todos} onToggle={onToggleComplete} onDelete={onDeleteTodo}/>
    </View>
    </View>
  );
}

TodoContainer.option = props =>
  props.navigation.setParams({data:todos});

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  }
});


export default TodoContainer;