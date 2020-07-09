import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import fireApp from './fire';
const rootRef = fireApp.database().ref();
// const animalRef = rootRef.child('MenuEx/GoiY/01/');
// import firebase from 'firebase';
// import {NavigationContainer} from '@react-navigation/native';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Profile: [],
      email: '',
      uid: '',
      Age: '',
      Avata: '',
      Gender: '',
      Heavy: '',
      Name: '',
      Tall: '',
      loading: false,
    };
  }
  componentDidMount() {
    const {email, uid} = fireApp.auth().currentUser;
    this.setState({email, uid});
    const animalRef = rootRef.child('MenuEx/Profile/' + uid + '/');
    animalRef.on('value', (Snapshot) => {
      var thisdata = Snapshot.val();
      this.setState({
        Age: thisdata.Age,
        Avata: thisdata.Avata,
        Gender: thisdata.Gender,
        Heavy: thisdata.Heavy,
        Name: thisdata.Name,
        Tall: thisdata.Tall,
      });
      console.log(Snapshot.val());
      console.log(this.state);
      this.setState({
        loading: false,
      });
    });
  }
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.tops}>
          <Text>
            Email: {this.state.email} {'\n'}
            UID: {this.state.uid}
          </Text>
        </View>
        <View style={styles.bottoms}>
          <Text> Tên: {this.state.Name}</Text>
          <Text> Age: {this.state.Age}</Text>
          <Text> Avata: {this.state.Avata}</Text>
          <Text> key: {this.state.key}</Text>
          <Text> Heavy: {this.state.Heavy}</Text>
          <Text> Tall: {this.state.Tall}</Text>
          <Button
            title="Đăng Xuất"
            onPress={() => this.props.navigation.navigate('Login')}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgb(234, 195, 176)',
  },
  tops: {
    flex: 3,
  },
  bottoms: {
    flex: 7,
  },
});
