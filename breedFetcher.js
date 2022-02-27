const request = require('request');
const arg = process.argv.slice(2);



request(`https://api.thessscatapi.com/v1/breeds/search?q=${arg}`, (error, response, body) =>{
  
  if (error) {
    console.log(error);
    return;
  }
   
  //console.log('body: ', body);
   
  let data = '';
  if (body) {
    data = JSON.parse(body);
    console.log(response.statusCode);
  }
  //console.log(data);

  if (data.length > 0) {
    console.log(data[0].description);
  } else {
    console.log(`Invalid breed name ${arg}, Breed not found..`);
  }
  
});