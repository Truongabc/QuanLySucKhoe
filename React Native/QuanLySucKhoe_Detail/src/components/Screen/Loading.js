import React, {Component} from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import * as firebase from '@react-native-firebase/app';
export default class Loading extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.props.navigation.navigate(
        user ? 'HomeComponents' : 'LoginComponents',
      );
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Đang tải...</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
