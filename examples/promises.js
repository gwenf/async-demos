const { randomSeconds } = require('./random')

function addOneAsync(val) {
  console.log('Function started...')
  return new Promise((resolve, reject) => {
    console.log('Resolving...')
    // reject('Some error message')
    return setTimeout(resolve(val), randomSeconds())
  })
}
