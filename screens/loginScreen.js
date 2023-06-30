import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';
import db from '../config';

// import firebaseConfig from "../config"

//  import firebase from "firebase"
// import "firebase/storage"
// import "firebase/auth"

// import "firebase/firestore"

import firebase from 'firebase';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: '',
      password: '',
    };
  }

  userSignIn = (emailId, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailId, password)
      .then(() => {
        this.props.navigation.navigate('Route');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      });
  };

  userSignUp = (emailId, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailId, password)
      .then(() => {
        db.collection('users').add({
          emailId: this.state.emailId,
          password: this.state.password,
        });
      });
    this.props.navigation.navigate('Route').catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      return alert(errorMessage);
    });
  };

  // registerUser = (email, password) => {

  //   firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((userCredential) => {
  //       Alert.alert("User registered!!");
  //       console.log(userCredential.user.uid)
  //       this.props.navigation.replace("Route");
  //       firebase.database().ref("/users/" + userCredential.user.uid)
  //               .set({
  //                 email: userCredential.user.email,

  //               })
  //     })
  //     .catch(error => {
  //       Alert.alert(error.message);
  //     });

  // };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.loginText}>Login</Text>
        </View>

        <TextInput
          style={styles.textInput}
          placeholder="Enter Incharge/Parent ID"
          keyboardType="email-address"
          onChangeText={(text) => {
            this.setState({
              emailId: text,
            });
          }}
        />

        <TextInput
          style={[styles.textInput, { marginTop: 20 }]}
          placeholder="Enter password"
          secureTextEntry={true}
          onChangeText={(text) => {
            this.setState({
              password: text,
            });
          }}
        />
<TouchableOpacity
          onPress={() => {
            this.userSignIn(this.state.emailId, this.state.password);
          }}
          style={[styles.button, { marginTop: 20 }]}>
          <Text>Login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={() => {
            //this.userSignUp(this.state.emailId, this.state.password)
            this.props.navigation.navigate('Sign');
          }}
          style={[styles.button, { marginTop: 50 }]}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
        

        <TouchableOpacity
          onPress={() => {
            //this.userSignUp(this.state.emailId, this.state.password)
            this.props.navigation.navigate('Sign');
          }}
          >
          <Text style={styles.text}>Don't have an account!!</Text>
        </TouchableOpacity>
        


        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },

  textInput: {
    width: 300,
    height: 50,
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 4,
    backgroundColor: 'white',
    marginTop: 50,
    justifyContent: 'center',
  },

  loginText: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    color:'#2916F5',
    alignItems:'center',
    marginTop: -80,
    justifyContent: 'center',
    fontSize: 16,
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
    fontWeight: 'bold',
  },
});
