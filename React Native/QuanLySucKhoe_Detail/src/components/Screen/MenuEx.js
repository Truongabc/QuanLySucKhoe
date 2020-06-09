import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import DayMenuEx from './DayMenuEx';
import WeekMenuEx from './WeekMenuEx';
import MonthMenuEx from './MonthMenuEx';
const Tab = createMaterialTopTabNavigator();
export default class MenuExComponents extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.tops}>
          <Text>This is Calor:1153</Text>
        </View>
        <View style={styles.bottoms}>
          <Tab.Navigator>
            <Tab.Screen name="Ngày" title="Ngay" component={DayMenuEx} />
            <Tab.Screen name="Tuần" component={WeekMenuEx} />
            <Tab.Screen name="Tháng" component={MonthMenuEx} />
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
