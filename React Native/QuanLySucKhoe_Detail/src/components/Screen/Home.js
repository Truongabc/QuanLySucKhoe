import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
export default class Home extends Component {
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Hello Home</Text>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    );
  }
}
