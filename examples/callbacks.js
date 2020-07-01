const { randomSeconds } = require('./random')

let callNumber = 1

function asyncExample(num, callback) {
  setTimeout(() => {
    console.log('-------------')
    console.log('timeout after:', randomSeconds())
    console.log('call number:', callNumber)
    callNumber += 1
    callback(num)
  }, randomSeconds())
}

function myCallback(num) {
  console.log('Function Number:', num)
  console.log('-------------')
}

asyncExample(1, myCallback)
asyncExample(2, myCallback)
asyncExample(3, myCallback)
asyncExample(4, myCallback)
asyncExample(5, myCallback)
asyncExample(6, myCallback)
