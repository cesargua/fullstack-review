//here, we will write the logic to get the top 25 repos to get back to the server
// const {getReposByUsername} = require('../../helpers/github.js');

const model = require('../model');
const _ = require('underscore');
const db = require('../../database');
module.exports = {
    create: (data)=>{ //after post
      console.log('inside create in controller')
      data.forEach(repo=>{
        var ind = data.indexOf(repo);
        data[ind] = _.extend(data[ind], {totalCount: repo.stargazers_count+
          repo.watchers_count+ repo.forks
        });
        model.create(repo);
      });
    },
    retrieveAll: (req,res)=> {
      console.log('inside readAll in controller');
      model.retrieveAll((err, repos)=>{
        if(err){
          console.error(err);
        } else{
          repos.sort((a,b)=> {
            return b.totalCount - a.totalCount
          });
          repos= repos.slice(0,25);
          res.status(200).send(JSON.stringify(repos));
        }
      });
    }
}