const axios = require('axios');

axios.defaults.baseURL = "https://pokeapi.co/api/v2/";

axios({
    method: 'get',
    url: 'pokemon/ditto',
  })
    .then((res) => {
        console.log(res)
    });