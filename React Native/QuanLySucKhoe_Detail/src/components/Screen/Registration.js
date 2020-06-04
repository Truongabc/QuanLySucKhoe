import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
export default class RegistrationComponents extends Component {
  render() {
    return (
      <View>
        <Text>Hello Registration.js</Text>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    );
  }
}
