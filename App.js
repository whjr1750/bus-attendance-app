import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TabNavigator from './navigation/tabNavigator';
import DrawerNavigator from './navigation/DrawerNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/loginScreen';
import RouteScreen from './screens/routeScreens';
import Route1Screen from './screens/route1';
import Route2Screen from './screens/route2';
import Route3Screen from './screens/route3';
import Route4Screen from './screens/route4';
import ConfirmScreen from './screens/confirm';
import ParentScreen from './screens/parentScreen';
import InchargeScreen from './screens/incharge';
import SignInScreen from './screens/signIn'

import firebase from 'firebase';
import db from './config';
//  import 'firebase/firestore';

//import firebase from "firebase/app"
// import "firebase/storage"
// import "firebase/auth"

// import firebaseConfig from "./config"

//import firebase from "firebase"

import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <Stack.Screen name="Sign" component={SignInScreen}/>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Route" component={RouteScreen} />
     
      <Stack.Screen name="Route1" component={Route1Screen} />
      <Stack.Screen name="Route2" component={Route2Screen} />
      <Stack.Screen name="Route3" component={Route3Screen} />
      <Stack.Screen name="Route4" component={Route4Screen} />
      <Stack.Screen name="Dashboard" component={DrawerNavigator} />
      <Stack.Screen name="Confirm" component={ConfirmScreen} />
      <Stack.Screen name="Incharge" component={InchargeScreen} />
      <Stack.Screen name="Parent" component={ParentScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}
