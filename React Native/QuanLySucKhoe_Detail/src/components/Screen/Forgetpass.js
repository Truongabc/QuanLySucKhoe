import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
const Forgetpass = () => {
  return (
    <View style={styles.Container}>
      <Text> textInComponent </Text>
    </View>
  );
};
export default Forgetpass;
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
