const got = require('got');

const handleRecievedResponse = (response) => {
   const responseObject = JSON.parse(response.body);
  console.log(responseObject);
}

const url = 'https://api.github.com/repos/sinatra/sinatra';

got(url).then(handleRecievedResponse);

// const stringValue = '{"name": "John"}';
// const objectValue = JSON.parse(stringValue);

// console.log(objectValue);

// console.log(objectValue.name);