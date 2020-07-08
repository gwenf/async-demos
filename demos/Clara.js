const axios = require('axios');

axios.get('https://api.github.com/users/gwenf/repos')
    .then(response => {
        // console.log(response.data.url);
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });