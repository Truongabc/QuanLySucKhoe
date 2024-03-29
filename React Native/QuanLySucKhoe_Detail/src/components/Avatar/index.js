import React, {Component} from 'react';
import {View} from 'react-native';
import Styles from './Styles';
export {Styles};
export default class Avatar extends Component {
  render() {
    const {width, height, borderRadius, backgroundColor} = this.props;
    return (
      <View
        style={{
          width,
          height,
          borderRadius,
          backgroundColor,
        }}
      />
    );
  }
}
