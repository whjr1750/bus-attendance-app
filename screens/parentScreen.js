import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import db from '../config';
import { RFValue } from 'react-native-responsive-fontsize';

export default class ParentScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      present_students: [],
      absent_students: [],
      id: '',
    };
  }

  getId(inchargeid) {
    //setting id
    if (inchargeid == '001') {
      this.props.navigation.navigate('Route1', { id: inchargeid });
    } else if (inchargeid == '002') {
      this.props.navigation.navigate('Route2', { id: inchargeid });
    } else if (inchargeid == '003') {
      this.props.navigation.navigate('Route3', { id: inchargeid });
    } else if (inchargeid == '004') {
      this.props.navigation.navigate('Route4', { id: inchargeid });
    }
  }

  getTodaysDate() {
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
    return today;
  }

  componentDidMount = async () => {
    this.present();
    this.absent();
  };
  present = async () => {
    var today = await this.getTodaysDate();
    var students_ref = await db
      .collection('attendance')
      .where(today, '==', 'present')
      .get();
    students_ref.docs.map((doc) => {
      this.setState({
        present_students: [...this.state.present_students, doc.data()],
      });
    });
  };

  absent = async () => {
    var today = await this.getTodaysDate();
    var students_ref = await db
      .collection('attendance')
      .where(today, '==', 'absent')
      .get();
    students_ref.docs.map((doc) => {
      this.setState({
        absent_students: [...this.state.absent_students, doc.data()],
      });
    });
  };
  render() {
    return (
      <View style={styles.presentContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Parent ID"
          onChangeText={(text) => {
            this.setState({
              id: text,
            });
          }}
        />

        <Text style={styles.title}>Present Students List</Text>
        <View style={styles.presentContainer}>
          {this.state.present_students.map((student, index) => (
            <Text style={{ fontSize: 18 }}>{student.student_name}</Text>
          ))}
        </View>
        <Text style={styles.title}>Absent Students List</Text>

        <View style={styles.absentContainer}>
          {this.state.absent_students.map((student, index) => (
            <Text style={{ fontSize: 18 }}>{student.student_name}</Text>
          ))}
        </View>
        <View
          style={{
            flex: 0.1,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Text>Present: {this.state.present_students.length}</Text>
          <Text>Absent: {this.state.absent_students.length}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  presentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#50C878',
  },

  // presentContainer: {

  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginTop:40,
  // },
  absentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
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
    marginLeft: 15,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    // marginTop:10
  },
});
