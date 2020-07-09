import React, {Component} from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import fireApp from './fire';
export default class Registration extends Component {
  state = {
    email: '',
    errorShow: null,
  };
  handleRegistration = () => {
    fireApp
      .auth()
      .sendPasswordResetEmail(this.state.email)
      .then(() => {
        Alert.alert(
          'Thông báo!',
          'Lấy mật khẩu thành công! Vui lòng kiểm tra email và thử lại!',
          [
            {
              text: 'OK',
              onPress: () => this.props.navigation.navigate('Forgetpass'),
            },
          ],
          {cancelable: false},
        );
        this.setState({email: ''});
      })
      .catch((error) => this.setState({errorShow: error.message}));
  };
  render() {
    return (
      <View styles={styles.container}>
        <Text style={styles.headers}>Quên mật khẩu!</Text>
        <View style={styles.erreShow}>
          {this.state.errorShow && (
            <Text style={styles.erreShow}>{this.state.errorShow}</Text>
          )}
        </View>
        <View style={styles.form}>
          <View style={styles.last}>
            <Text style={styles.inputTitle}>Nhập vào địa chỉ Email</Text>
            <TextInput
              style={styles.input}
              autocapitalize="none"
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={this.handleRegistration}>
          <Text style={styles.buttonWord}>Lấy lại mật khẩu</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonReg}
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.buttonWord2}>
            Có tài khoản? <Text style={styles.buttonWord3}>Đăng nhập</Text>
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
