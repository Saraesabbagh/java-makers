const got = require('got');

const handleRecievedResponse = (response) => {
  console.log(response.body);
}

const url = 'https://api.github.com/repos/sinatra/sinatra';

got(url).then(handleRecievedResponse);