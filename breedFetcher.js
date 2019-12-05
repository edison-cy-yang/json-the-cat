const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err, response, body) => {
    if (err) {
      callback(err, null);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        const error = `Requested breed ${breed} not found`;
        callback(error, null);
      } else {
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = {
  fetchBreedDescription
};