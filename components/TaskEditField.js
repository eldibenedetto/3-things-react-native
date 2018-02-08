import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

class TaskEditField extends React.Component {

  state = {
    inputValue: "What are you going to accomplish tomorrow?"
  }

  handleTextChange = inputValue => {
    this.setState({ inputValue })
  }

  render () {
    return(
      <View>
        <TextInput
          value={this.state.inputValue}
          onChange={this.handleTextChange}
          style={styles.input}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    width: 200,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black'
  }
})

export default TaskEditField
