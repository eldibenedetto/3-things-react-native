state = {
  firstInt: 255,
  secondInt: 0,
  thirdInt: 0
}

componentDidMount() {
  this.interval = setInterval()
}

componentWillUnmount() {

}

color = () => {
  let { firstInt, secondInt, thirdInt } = this.state
  if (firstInt === 255 && secondInt === 0 && thirdInt === 0) {
    secondInt += 15
  } else if (firstInt === 255 && secondInt === 255 && thirdInt === 0) {
    firstInt -= 15
  } else if (firstInt === 0 && secondInt === 255 && thirdInt === 0) {
    thirdInt += 15
  } else if (firstInt === 0 && secondInt === 255 && thirdInt === 255) {
    secondInt -= 15
  } else if (firstInt === 0 && secondInt === 0 && thirdInt === 255) {
    firstInt += 15
  } else if (firstInt === 255 && secondInt === 0 && thirdInt === 255) {
    thirdInt -= 15
  }
  return `rgb(${firstInt}, ${secondInt}, ${thirdInt})`
}
