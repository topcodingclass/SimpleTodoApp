import React,{ useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Header = props =>{
  return(
    <View style={styles.header}>
            <Text style={styles.headerText}>{props.title}</Text>
            <Text>{props.subtitle}</Text>
        </View>
  )  
}

const styles = StyleSheet.create(
  {
    header:{
      height:90,
      backgroundColor: 'tomato',
      justifyContent:'flex-end',
      alignItems:'center'
    },
    headerText:{
      color:'white',
      fontSize:20,
      
    },
  }
)

export default Header;