import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import TaskEditField from '../components/TaskEditField'
import { StackNavigator } from 'react-navigation'

class TaskEdit extends React.Component {

  static navigationOptions = {
    title: 'Edit Tasks'
  }

  state = {
    content: {
      firstThing: "",
      secondThing: "",
      thirdThing: ""
    },
    tasks: [],
    firstInt: 255,
    secondInt: 0,
    thirdInt: 0
  }

  handleInput = (inputValue, refName) => {
    this.setState({ content: {...this.state.content, [refName]: inputValue} })
  }

  handlePress = (event) => {
    console.log('pressed')
    Object.values(this.state.content).map(thing => {
      this.state.tasks.push(thing)
    })
    // this.setState({ content: { ...this.state.content, firstThing: "", secondThing: "", thirdThing: "" }})
    const { navigate } = this.props.navigation

    navigate('Profile', { things: this.state.tasks })
  }

  componentDidMount() {
    this.repeat = setInterval(() => this.color(), 50)
  }

  componentWillUnmount() {
    clearInterval(this.repeat)
  }

  color = () => {
    let { firstInt, secondInt, thirdInt } = this.state
    if (firstInt === 255 && secondInt !== 255 && thirdInt === 0) {
      this.setState({secondInt: secondInt += 5})
    } else if (firstInt !== 0 && secondInt === 255 && thirdInt === 0) {
      this.setState({firstInt: firstInt -= 5})
    } else if (firstInt === 0 && secondInt === 255 && thirdInt !== 255) {
      this.setState({thirdInt: thirdInt += 5})
    } else if (firstInt === 0 && secondInt !== 0 && thirdInt === 255) {
      this.setState({secondInt: secondInt -= 5})
    } else if (firstInt !== 255 && secondInt === 0 && thirdInt === 255) {
      this.setState({firstInt: firstInt += 5})
    } else if (firstInt === 255 && secondInt === 0 && thirdInt !== 0) {
      this.setState({thirdInt: thirdInt -= 5})
    }
  }

  render() {

    let { firstInt, secondInt, thirdInt } = this.state
    let currentColor = `rgb(${firstInt}, ${secondInt}, ${thirdInt})`

    const TaskList = Object.keys(this.state.content).map(name => {
      return <TaskEditField value={this.state.name} updateValue={this.handleInput}
      refName={name}
      key={name}
      styles={styles.textInput}/>
    })
    return(
      <View style={[styles.container, { backgroundColor: currentColor}]}>
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
