import React, {Component} from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import LoginScreen from "../screens/loginScreen";
import TabNavigator from "./tabNavigator"
import RouteScreen from "../screens/routeScreens"

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component {

  render(){
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}}>
      

    <Drawer.Screen name="Home" component={TabNavigator} />
  
     
    </Drawer.Navigator>
  );
}

}



