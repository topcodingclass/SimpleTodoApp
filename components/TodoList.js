import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons'


const TodoList = props => {
    console.log('TodoList', props)
    const renderItem = ({ item, index }) => (
        <View style={styles.item}>
        <TouchableOpacity key={item.created} onPress={() => props.onToggle(index)} >
            <Text style={{fontSize:16, textDecorationLine: item.completed ? 'line-through' : 'none'}}>
                {item.title}
              </Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => props.onDelete(index)} style={{ paddingLeft: 25, paddingRight: 15 }} >
          <Ionicons name="md-trash-outline" size={24} color="gray" />
        </TouchableOpacity>
        </View>
    );
    return (
        <FlatList data={props.data} renderItem={renderItem}
            keyExtractor={item => item.created.toString()}
        />
    )

}

const styles = StyleSheet.create(
    {
        item:{
            flexDirection:'row',
            justifyContent:'space-between',
            margin:10,
        }
    }
)

export default TodoList