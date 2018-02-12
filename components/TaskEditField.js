import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

class TaskEditField extends React.Component {

  handleTextChange = (text) => {
    this.props.updateValue(text, this.props.refName)
  }

  render () {
    return(
      <View>
        <View style={styles.input}>
          <TextInput
            style={styles.text}
            placeholder="What are you going to accomplish tomorrow?"
            placeholderTextColor="white"
            value={this.props.value}
            onChangeText={this.handleTextChange}
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
