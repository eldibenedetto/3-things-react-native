import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskEdit from './screens/TaskEdit'

export default class App extends React.Component {

  state = {
    firstInt: 255,
    secondInt: 0,
    thirdInt: 0
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

    return (
      <View style={[styles.container, { backgroundColor: currentColor}]}>
        <Text style={styles.text}>My frist mobile app!</Text>
        <TaskEdit />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  text: {
    color: 'black',
    fontSize: 24,
    fontWeight: '500',
    borderWidth: 0.5,
    borderColor: 'black'
  },
  textInput: {
    flex: 1,
    margin: 5
  }
})
