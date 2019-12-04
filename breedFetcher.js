const request = require('request');

const breedFetcher = function(breed) {
  request(`https://api.thectapi.com/v1/breeds/search?q=${breed}`, (err, response, body) => {
    if (err) {
      console.log(err);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        console.log(`Requested breed ${breed} not found`);
      }
    }
  });
};

breedFetcher(process.argv[2]);