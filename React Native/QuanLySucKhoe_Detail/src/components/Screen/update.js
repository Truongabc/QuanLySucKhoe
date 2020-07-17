import React, {Component} from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import fireApp from './fire';
const rootRef = fireApp.database().ref();
export default class update extends Component {
  state = {
    Age: '',
    Gender: '',
    Heavy: '',
    Name: '',
    Tall: '',
    email: '',
    phone: '',
    password: '',
    errorShow: null,
  };
  componentDidMount() {
    const {email, uid} = fireApp.auth().currentUser;
    this.setState({email, uid});
    const animalRef = rootRef.child('MenuEx/Profile/' + uid + '/');
    animalRef.on('value', (Snapshot) => {
      var thisdata = Snapshot.val();
      if (thisdata != null) {
        this.setState({
          Age: thisdata.Age,
          Gender: thisdata.Gender,
          Heavy: thisdata.Heavy,
          Name: thisdata.Name,
          Tall: thisdata.Tall,
        });
        console.log('child',Snapshot.val());
        console.log('state',this.state);
      } else {
        this.setState({
          Age: '',
          Gender: '',
          Heavy: '',
          Name: '',
          Tall: '',
        });
      }
    });
  }
  handleRegistration = () => {
    const {email, uid} = fireApp.auth().currentUser;
    this.setState({email, uid});
    const animalRef1 = rootRef.child('MenuEx/Profile/' + uid + '/');
    animalRef1.set({
      Age: this.state.Age,
      Gender: this.state.Gender,
      Heavy: this.state.Heavy,
      Name: this.state.Name,
      Tall: this.state.Tall,
    });
    Alert.alert(
      'Thông báo!',
      'Cập nhật thông tin thành công',
      [
        {
          text: 'OK',
          onPress: () => this.props.navigation.navigate('Home'),
        },
      ],
      {cancelable: false},
    );
  };
  render() {
    return (
      <View styles={styles.container}>
        <Text style={styles.headers}>Cập nhật thông tin cá nhân!</Text>
        <View style={styles.erreShow}>
          {this.state.errorShow && (
            <Text style={styles.erreShow}>{this.state.errorShow}</Text>
          )}
        </View>
        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>Họ và tên</Text>
            <TextInput
              style={styles.input}
              autocapitalize="none"
              onChangeText={(Name) => this.setState({Name})}
              value={this.state.Name}
            />
          </View>
          <View style={styles.last}>
            <Text style={styles.inputTitle}>Năm sinh</Text>
            <TextInput
              style={styles.input}
              autocapitalize="none"
              onChangeText={(Age) => this.setState({Age})}
              value={this.state.Age}
            />
          </View>
          <View style={styles.last}>
            <Text style={styles.inputTitle}>Giới Tính</Text>
            <TextInput
              style={styles.input}
              autocapitalize="none"
              onChangeText={(Gender) => this.setState({Gender})}
              value={this.state.Gender}
            />
          </View>
          <View style={styles.last}>
            <Text style={styles.inputTitle}>Chiều cao</Text>
            <TextInput
              style={styles.input}
              autocapitalize="none"
              onChangeText={(Tall) => this.setState({Tall})}
              value={this.state.Tall}
            />
          </View>
          <View style={styles.last}>
            <Text style={styles.inputTitle}>Cân nặng</Text>
            <TextInput
              style={styles.input}
              autocapitalize="none"
              onChangeText={(Heavy) => this.setState({Heavy})}
              value={this.state.Heavy}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={this.handleRegistration}>
          <Text style={styles.buttonWord}>Cập nhật</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headers: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
  },
  erreShow: {
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30,
  },
  inputTitle: {
    color: '#8a8f9e',
    fontSize: 10,
    textTransform: 'uppercase',
  },
  input: {
    borderBottomColor: '#8a8f9e',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: '#161f3d',
  },
  last: {
    marginTop: 32,
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: '#e9446a',
    borderRadius: 4,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '400',
    textAlign: 'center',
  },
  buttonWord: {
    color: '#FFF',
    fontWeight: '500',
  },
  buttonReg: {
    alignSelf: 'center',
    marginTop: 32,
  },
  buttonWord2: {
    color: '#414959',
    fontSize: 13,
  },
  buttonWord3: {
    color: '#e9446a',
    fontWeight: '500',
  },
});
