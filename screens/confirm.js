import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

export default class ConfirmScreen extends  Component{
  render(){
    return(
      <View style={styles.container}>
      <Text style={styles.text}> Are you Incharge OR Parent???</Text>
      <TouchableOpacity style={styles.button} onPress={()=>{
  this.props.navigation.navigate("Incharge")
 
 }}  >
 
 <Text > Incharge</Text>
 
</TouchableOpacity>

<TouchableOpacity   style={styles.button} onPress={()=>{

  this.props.navigation.navigate("Parent")
 
 }}  >
 
 <Text> Parent</Text>
 
</TouchableOpacity>
</View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },

button: {
    borderRadius: 550,
    width: 150,
    borderWidth: 2,
    borderColor: '',
    backgroundColor: 'orange',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 50,
    height: 50,
    justifyContent: 'center',
    fontWeight: 'bold'
  }
})