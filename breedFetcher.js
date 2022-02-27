const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) =>{
  
    if (error) {
      callback(error, null);
      return;
    }
  
    let data = JSON.parse(body);
  
    if (data.length > 0) {
      callback(null,data[0].description); // on success
    } else {
      callback(`Invalid breed name '${breedName}', Breed not found..`, null);
    }
  });
};

module.exports = { fetchBreedDescription };