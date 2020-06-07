import React, {Component} from 'react';
// import {Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import DayMenuEx from './DayMenuEx';
import WeekMenuEx from './WeekMenuEx';
import MonthMenuEx from './MonthMenuEx';
const Tab = createMaterialTopTabNavigator();
export default class MenuExComponents extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="DayMenuEx" component={DayMenuEx} />
        <Tab.Screen name="WeekMenuEx" component={WeekMenuEx} />
        <Tab.Screen name="MonthMenuEx" component={MonthMenuEx} />
      </Tab.Navigator>
    );
  }
}
