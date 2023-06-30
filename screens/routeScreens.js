import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import db from '../config';
export default class RouteScreen extends Component {
  constructor() {
    super();
    this.state = {
      data1: [],
    };
  }

  componentDidMount() {
    this.setState({
      data1: [],
    });
  }

  fetchDetails = async () => {
    const number = 1;
    data = await db
      .collection('students')
      .where('student_routeNo', '==', number)
      .get();
    data.docs.map((doc) => {
      this.setState({
        data1: [...this.state.data1, doc.data()],
      });
    });

    console.log(this.state.data1);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.routeText}>Route</Text>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Confirm')}
          style={styles.button}>
          1
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Confirm')}
          style={styles.button}>
          2
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Confirm')}
          style={styles.button}>
          3
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Confirm')}
          style={styles.button}>
          4
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Tab')}
          style={styles.button}>
          HOME SCREEN
        </TouchableOpacity>

        <FlatList
          data={this.state.data1}
          renderItem={({ item }) => (
            <View style={{ borderBottomWidth: 2 }}>
              <Text>{'Student Name: ' + item.student_name}</Text>
              <Text>{'Student Route No: ' + item.student_routeNo}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },

  button: {
    borderRadius: 550,
    width: 150,
    borderWidth: 2,
    borderColor: '',
    backgroundColor: 'yellow',
    alignItems: 'center',
    alignSelf: 'center',
    height: 50,
    justifyContent: 'center',
    marginTop: 50,
  },

  routeText: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
