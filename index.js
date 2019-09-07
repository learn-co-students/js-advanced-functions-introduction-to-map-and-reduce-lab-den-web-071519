const mapToNegativize = (array) => {
    return array.map(num => num * -1)
}

const mapToNoChange = (array) => {
    return array.map(name => name)
}

const mapToDouble = (array) => {
    return array.map(number => number * 2)
}

const mapToSquare = (array) => {
    return array.map(number => Math.pow(number, 2))
}

const reduceToTotal = (array, startingPoint=0) => {
    return array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, startingPoint)
}

function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (!src[i]) return false
    }
    return true
  }
  
  function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
  }