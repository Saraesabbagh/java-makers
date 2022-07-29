const got = require("got");

// const fetchRepositoryInfo = require("./fetchRepositoryInfo");


const fetchRepositoryInfo = (response) => {
  const responseObject = JSON.parse(response.body);
  console.log(responseObject);
};

const url = "https://api.github.com/repos/sinatra/sinatra";

got(url).then(fetchRepositoryInfo);


// const fetchRepositoryInfo = (path, callbackFunction) => {
//   let url = 'https://api.github.com/repos/' + path;
//     got(url)
//       .then((response) => {
//           callbackFunction(JSON.parse(response.body));
//       });
// } 

module.exports = fetchRepositoryInfo;