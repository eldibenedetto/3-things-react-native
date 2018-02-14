import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'
import TaskEdit from './screens/TaskEdit'
import Profile from './screens/Profile'

class App extends React.Component {

  render() {
    return (
      <RootStack />
    );
  }
}

export default StackNavigator({
  TaskEdit: {
    screen: TaskEdit
  },
  Profile: { screen: Profile }
})
