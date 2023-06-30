import  React ,{Component} from 'react';
import { Text, View, StyleSheet ,FlatList,TextInput,TouchableOpacity} from 'react-native';
import db from "../config"

export default class Incharge extends  Component{

constructor(props){
super(props)
this.state={
  id:"",
  name:"",
  route:""
}
}

componentDidMount(){


}



getId(inchargeid){
//setting id
if(inchargeid == "001"){

  this.props.navigation.navigate("Route1",{id:inchargeid})

}

else if (inchargeid == "002"){
  this.props.navigation.navigate("Route2",{id:inchargeid})

}
else if (inchargeid == "003"){
  this.props.navigation.navigate("Route3",{id:inchargeid})

}

else if (inchargeid == "004") {
  this.props.navigation.navigate("Route4",{id:inchargeid})

}

}
registerStudents=async(student_name,route_no)=>{
  await db.collection("student").add({
      "student_name": student_name,
      "student_routeNo":route_no,
      
    });
}

  
render(){
  return(
<View style={styles.presentContainer}>
<Text>INCHARGE</Text>

<TextInput style={styles.textInput} 
          placeholder="Enter Incharge ID"
          
          onChangeText={(text)=>{this.setState({
            id: text

          })}}
           />

           <TextInput
          style={styles.textInput}
          placeholder="Enter Name"
          
          onChangeText={(text) => {
            this.setState({
              name: text,
            });
          }}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter Route NO."
          
          onChangeText={(text) => {
            this.setState({
              route: text,
            });
          }}
        />

           <TouchableOpacity 
           onPress={()=>{this.getId(this.state.id)}
           //onPress={()=>{this.registerStudents(this.state.name,this.state.route)}}
           }
  
style={[styles.button,{marginTop:20}]}>
  <Text>Submit</Text>
</TouchableOpacity>

<TouchableOpacity 
           //onPress={()=>{this.getId(this.state.id)}
           onPress={()=>{this.registerStudents(this.state.name,this.state.route)}}
           
  
style={[styles.button,{marginTop:20}]}>
  <Text>Submit Info.</Text>
</TouchableOpacity>


<TouchableOpacity onPress={()=>{
  this.props.navigation.navigate("Route")
 }}  
style={[styles.button,{marginTop:20}]}>
  <Text>Back</Text>
</TouchableOpacity>
</View>
  )
}
}



const styles = StyleSheet.create({

  presentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6CC417',
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
  },

  
})