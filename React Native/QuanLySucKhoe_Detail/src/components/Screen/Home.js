import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import fireApp from './fire';
// import firebase from 'firebase';

// import {NavigationContainer} from '@react-navigation/native';
export default class Home extends Component {
  state = {email: '', uid: ''};

  componentDidMount() {
    const {email, uid} = fireApp.auth().currentUser;
    this.setState({email, uid});
  }
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>
          Hello Home{' '}
          <Text>
            {this.state.email} !!!hello 2 !!!{this.state.uid}
          </Text>
        </Text>
        <Button
          title="Đăng Xuất"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    );
  }
}
