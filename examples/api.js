const axios = require('axios');

const BASE_URL = `https://api-cloud.browserstack.com/app-automate/recent_apps/`;


async function getAppId(id) {
axios.get(`${BASE_URL}/${id}`)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}
