//here, we will query to mongo
const db = require('../../database');

module.exports={

  create: (repo) => { //after post
    console.log('inside create in model')
    var repoModel = {
      repo_name: repo.full_name,
      description: repo.description,
      owner_name: repo.owner.login,
      owner_url: repo.owner.url,
      repo_url: repo.html_url,
      forks: repo.forks,
      watchers: repo.watchers,
      stars: repo.stargazers_count,
      totalCount: repo.totalCount
    }

    db.save(repoModel)

  },
  retrieveAll: (cb)=> {
    db.retrieve((err,data)=>{
      if(err){
        cb(err)
      } else  {
        cb(null,data)
      }
    })
  }
}