const axios = require('axios');
const config = require('../../config.js');
const controller = require('../controller')
const Promise = require('bluebird')


let getReposByUsername = (username) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  //
  // axios.get(options.url, options).then((res)=>{
  //   controller.create(res.data);
  // })
  return new Promise((resolve,reject)=>{
    axios.get(options.url, options).then(res=> {
      resolve(res.data)
    });
  })

}

module.exports.getReposByUsername = getReposByUsername;