import React, {Component} from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
// import * as firebase from '@react-native-firebase/app';
import fireApp from './fire';
export default class Registration extends Component {
  state = {
    Name: '',
    email: '',
    password: '',
    errorShow: null,
  };
  handleLogin = () => {
    const {email, password} = this.state;
    const auth = fireApp.auth();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert(
          'Thông báo!',
          'Đăng nhập thành công',
          [{text: 'OK', onPress: () => this.props.navigation.navigate('Home')}],
          {cancelable: false},
        );
        this.setState({email: '', password: '', Name: ''});
      })
      .catch((error) => this.setState({errorShow: error.message}));
  };
  render() {
    return (
      <View styles={styles.container}>
        <Text style={styles.headers}>Vui lòng đăng nhập!</Text>
        <View style={styles.erreShow}>
          {this.state.errorShow && (
            <Text style={styles.erreShow}>{this.state.errorShow}</Text>
          )}
        </View>

        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>Email</Text>
            <TextInput
              style={styles.input}
              autocapitalize="none"
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
            />
          </View>
          <View style={styles.last}>
            <Text style={styles.inputTitle}>Mật khẩu</Text>
            <TextInput
              style={styles.input}
              autocapitalize="none"
              secureTextEntry={true}
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
          <Text style={styles.buttonWord}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonReg}
          onPress={() => this.props.navigation.navigate('Registration')}>
          <Text style={styles.buttonWord2}>
            Chưa có tài khoản? <Text style={styles.buttonWord3}>Đăng kí</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonReg}
          onPress={() => this.props.navigation.navigate('Forgetpass')}>
          <Text style={styles.buttonWord2}>
            Quên mật khẩu?
            <Text style={styles.buttonWord3}>Nhận lại mật khẩu</Text>
          </Text>
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
