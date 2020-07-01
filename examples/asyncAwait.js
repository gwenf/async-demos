const { randomSeconds } = require('./random')

function addOneAsync(val) {
  console.log('Function started...')
  return new Promise((resolve, reject) => {
    console.log('Resolving...')
    reject('Some error message')
    return setTimeout(resolve(val), randomSeconds())
  })
}

async function doSomething() {
  try {
    const val = await addOneAsync(1)
    console.log(val + 1)
  } catch (err) {
    console.error(err)
  }
}

doSomething()
