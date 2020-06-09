import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import DayJogging from './DayJogging';
import WeekJogging from './WeekJogging';
import MonthJogging from './MonthJogging';
const Tab = createMaterialTopTabNavigator();
export default class JoggingComponents extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.tops}>
          <Text>This is Calor:1153</Text>
        </View>
        <View style={styles.bottoms}>
          <Tab.Navigator>
            <Tab.Screen name="Ngày" title="Ngay" component={DayJogging} />
            <Tab.Screen name="Tuần" component={WeekJogging} />
            <Tab.Screen name="Tháng" component={MonthJogging} />
          </Tab.Navigator>
        </View>
      </View>
    );
  }
}
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
