import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

class Profile extends React.Component {

  static navigationOptions = {
    title: 'Profile'
  }

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

    const { params } = this.props.navigation.state
    let listOfThings = params.things.map((thing, index) => {
      return <Text key={index}>{thing}</Text>
    })

    return (
      <View style={[styles.container, { backgroundColor: currentColor}]}>
        {listOfThings}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  }
})

export default Profile
