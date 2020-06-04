import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
export default class LoginComponents extends Component {
  render() {
    return (
      <View>
        <Text>Hello Login.js</Text>
        <Button
          title="Registration"
          onPress={() => this.props.navigation.navigate('Registration')}
        />
      </View>
    );
  }
}
