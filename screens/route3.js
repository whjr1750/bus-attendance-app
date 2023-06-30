import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import db from '../config';

export default class Route2Screen extends Component {
  constructor() {
    super();
    this.state = {
      allStudents: [],
      data1: [],
      presentPressedList: [],
      absentPressedList: [],
    };
  }

  componentDidMount = async () => {
    //this.getStudents();

    this.fetchDetails(3);
  };

  // Getting all  the students
  getStudents = () => {
    db.collection('student')
      .get()
      .then((snapshot) => {
        snapshot.docs.map((doc) => {
          this.setState({
            allStudents: [...this.state.allStudents, doc.data()],
          });
        });
      });
    console.log(doc.data());
  };

  // getting a particular route no student
  fetchDetails = async (number) => {
    data = await db
      .collection('student')
      .where('student_routeNo', '==', number)
      .get();
    data.docs.map((doc) => {
      this.setState({
        data1: [...this.state.data1, doc.data()],
      });
    });

    console.log(this.state.data1);
  };

  updateAttendence = async (student_name, route_no,status) => {

   // console.log(student_name);
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;

    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    today = dd + '-' + mm + '-' + yyyy;

    db.collection('attendance').add({
      "student_name": student_name,
      "student_routeNo": route_no,
     [today] :status
    });

    console.log('success');
  };



  render() {
    var data1 = this.state.data1;
    return (
      <View style={styles.container}>
        <View style={{ flex: 3 }}>
          {data1.map((student, index) => (
            <View key={index} style={styles.studentChartContainer}>
              <View
                key={'name' + index}
                style={{ flex: 1, flexDirection: 'row' }}>
                <Text
                  style={{ fontSize: 15, fontWeight: 'bold', marginRight: 10 ,marginTop:3}}>
                  {student.student_name}
                </Text>
                <Text style={{ fontSize: 15, fontWeight: 'bold',marginTop:3 }}>
                  {student.student_routeNo}
                </Text>
              </View>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <TouchableOpacity
                  style={
                    this.state.presentPressedList.includes(index)
                      ? [styles.presentButton, { backgroundColor: 'green' }]
                      : styles.presentButton
                  }
                  onPress={() => {
                    var presentPressedList = this.state.presentPressedList;
                    presentPressedList.push(index);
                    this.setState({ presentPressedList: presentPressedList });

                    this.updateAttendence(
                      student.student_name,
                      student.student_routeNo,
                      'present'
                    );

                    
                  }}>
                  <Text>Present</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={
                    this.state.absentPressedList.includes(index)
                      ? [styles.absentButton, { backgroundColor: 'red' }]
                      : styles.absentButton
                  }
                  onPress={() => {
                    var absentPressedList = this.state.absentPressedList;
                    absentPressedList.push(index);
                    this.setState({ absentPressedList: absentPressedList });
                    this.updateAttendence(
                      student.student_name,
                      student.student_routeNo,
                      'absent'
                    );
                  }}>
                  <Text>Absent</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Incharge');
              }}
              style={[styles.button, { marginTop: 20 }]}>
              <Text>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  presentButton: {
    width: 70,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderWidth: 4,
  },
  absentButton: {
    width: 70,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
  },
});
