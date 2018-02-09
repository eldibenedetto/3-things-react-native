import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TaskEditField from '../components/TaskEditField'

class TaskEdit extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <TaskEditField styles={styles.textInput}/>
        <TaskEditField styles={styles.textInput}/>
        <TaskEditField styles={styles.textInput}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  textInput: {
    flex: 1,
    margin: 5
  }
})

export default TaskEdit
