const axios = require('axios');

// Print out a list of names in Gwen's repo. Can use other endpoints too, such as, id.
// Make a call to the Github API chaining .then() and .catch() onto the Promises and print out your results.
axios.get('https://api.github.com/users/gwenf/repos')
    .then(response => {
        response.data.forEach(element => console.log(element.name));
    })
    .catch(error => {
        console.log(error);
    });

// Now create an async function and make the call using await syntax
async function axiosAsync () {
    // await response of fetch call
    let response = await axios.get('https://api.github.com/users/gwenf/repos');
    // only proceed once second promise is resolved
    return data;
  }

  axiosAsync()
    .then(response => {
        response.data.forEach(element => console.log(element.name));
    })
    .catch(error => {
        console.log(error);
    });
    