const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  repo_name: String,
  description: String,
  owner_name: String,
  owner_url: String,
  repo_url: String,
  forks: Number,
  watchers: Number,
  stars:Number,
  totalCount: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (data) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  const repo = new Repo(data);
  console.log(repo)

  //add a conditional where only insert to db if its not already in there
  repo.save((err)=>{
    if(err) console.error(err)
    else {
      console.log('Inserted repo to db successfully!')
    }
  })
}

let retrieve = (cb)=> {
  // Repo.find
  Repo.find({}, (err, data)=>{
    if(err){
      cb(err)
    } else {
      cb(null,data);
    }
  })

}

module.exports = {save, retrieve};
