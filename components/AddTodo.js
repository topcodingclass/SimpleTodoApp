import React, {useState} from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import {Ionicons} from '@expo/vector-icons'


const AddTodo = props =>{
    
    const [todo, setTodo] = useState('')
    const addNewTodo =()=>{
      props.add(todo)
      setTodo('')
      Keyboard.dismiss();
    }
    return(
      <View style={styles.inputContainer}>
      <TextInput style={styles.input} value = {todo} placeholder="Add new todo" onChangeText={text=>{setTodo(text)}}/>
      <TouchableOpacity onPress={addNewTodo}>
        <View style={{backgroundColor:'#eaeaea', height:50,justifyContent:'center',}}>
          <Ionicons name="md-add" size={30} style={{color:'red'}}/>
        </View>
      </TouchableOpacity>
    </View>
    )

  }

const styles = StyleSheet.create(
  {
  inputContainer:{      
    flexDirection:'row',
    marginVertical:5,
    marginHorizontal:10,
  },
  input:{
    borderColor: 'gray',
    backgroundColor:'#eaeaea',
    height:50,
    flex:1,
    padding:5,
  }
  }
)

export default AddTodo;