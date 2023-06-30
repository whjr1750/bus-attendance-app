import * as React  from 'react';
import { Text, View, StyleSheet,Button,TouchableOpacity,TextInput } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import {LinearGradient} from "expo-linear-gradient"
import db from "../config"



import firebase from "firebase"

export default class SignInScreen extends React. Component{

constructor(props){
super(props)
this.state={
  emailId: "",
  password:"",

}
}

  



userSignIn = (emailId, password)=>{
     firebase.auth().signInWithEmailAndPassword(emailId, password)
   .then(()=>{
      this.props.navigation.navigate("Route");
   })
   .catch((error)=> {
     var errorCode = error.code;
     var errorMessage = error.message;
     return Alert.alert(errorMessage);
     
   })
}



  userSignUp = (emailId, password) =>{
    
     firebase.auth().createUserWithEmailAndPassword(emailId, password)
     .then(()=>{
       db.collection('users').add({
         
         emailId:this.state.emailId,
         password:this.state.password
         
       })
      
     })
      //this.props.navigation.navigate("Route")
     .catch((error)=> {
       // Handle Errors here.
       var errorCode = error.code;
       var errorMessage = error.message;
       return alert(errorMessage)
     });

     
   }





 


 




render(){
  return(
<View style={styles.container}>

<View>
<Text style={styles.loginText}>Sign Up </Text>
</View>

<TextInput style={styles.textInput} 
          placeholder="Create a New Id..."
          keyboardType="email-address"
          onChangeText={(text)=>{this.setState({
            emailId: text

          })}}
           />

<TextInput style={[styles.textInput,{marginTop:20}]} 
          placeholder="Create a password..."
          secureTextEntry = {true}
          onChangeText={(text)=>{this.setState({
            password: text

          })}}
            />



<TouchableOpacity onPress={()=>{
  this.userSignUp(this.state.emailId, this.state.password)
 
 }}  

style={[styles.button,{marginTop:30}]}>
  <Text>Sign Up</Text>
</TouchableOpacity>


<TouchableOpacity
          onPress={() => {
            //this.userSignUp(this.state.emailId, this.state.password)
            this.props.navigation.navigate('Login');
          }}
          >
          <Text style={styles.text}>Already't have an account!!</Text>
        </TouchableOpacity>




</View>
  )
}
}



const styles = StyleSheet.create({

    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6495ED',
  },

  text: {
    color:'black',
    alignItems:'center',
    marginTop: 99,
    justifyContent: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },

  textInput: {
    width: 300,
    height: 50,
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 4,
    backgroundColor: 'white',
    marginTop: 50,
    justifyContent:"center"
  },

  loginText: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
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
  },

  

})