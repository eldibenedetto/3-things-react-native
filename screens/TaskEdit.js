import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import TaskEditField from '../components/TaskEditField'

class TaskEdit extends React.Component {

  state = {
    firstThing: "",
    secondThing: "",
    thirdThing: ""
  }

  handleInput = (inputValue, refName) => {
    this.setState({ [refName]: inputValue })
  }

  handlePress = (event) => {
    console.log('pressed')
  }

  render() {
    const TaskList = Object.keys(this.state).map(name => {
      return <TaskEditField value={this.state.name} updateValue={this.handleInput}
      refName={name}
      key={name}
      styles={styles.textInput}/>
    })
    return(
      <View style={styles.container}>
        {TaskList}
        <TouchableOpacity onPress={this.handlePress} style={styles.button}>
          <Text style={styles.buttonText}>Submit Tasks</Text>
        </TouchableOpacity>
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
  },
  button: {
    borderWidth: 1,
    padding: 25,
    borderColor: 'white',
    backgroundColor: 'black'
  },
  buttonText: {
    color: 'gray'
  }
})

export default TaskEdit
