const got = require('got')
const GithubApi = require('./githubApi')

class Github {

  constructor(api) {
    this.api = api;

  }

  fetch(path){
    this.api.fetchRepositoryData(path, (repositoryData) => {
        this.repositoryData = repositoryData;
      });
    }

  getRepoData(){
    return this.repositoryData;
  }
}

module.exports = Github;