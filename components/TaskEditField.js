import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

class TaskEditField extends React.Component {

  state = {
    inputValue: ""
  }

  handleTextChange = inputValue => {
    this.setState({ inputValue })
  }

  render () {
    return(
      <View>
        <View style={styles.input}>
          <TextInput
            style={styles.text}
            placeholder="What are you going to accomplish tomorrow?"
            placeholderTextColor="white"
            value={this.state.inputValue}
            onChange={this.handleTextChange}
            returnKeyType='done' />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    width: 350,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'black'
  },
  text: {
    fontSize: 16
  }
})

export default TaskEditField
