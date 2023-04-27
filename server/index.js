const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const github = require('./helpers/github.js')
const path = require('path')
const controller = require('./controller');
let app = express();

// TODO - your code here!
// Set up static file service for files in the `client/dist` directory.
// Webpack is configured to generate files in that directory and
// this server must serve those files when requested.
// app.use(express.static('public'))
// app.use(express.static('files'))
app.use(morgan('dev'));
app.use(cors());
app.use(express.json())
app.use(express.static(path.join('client', 'dist')))


app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  github.getReposByUsername(req.body.username).then(data => {
    controller.create(data)
  }).then(()=>{
    res.sendStatus(201)
  });
});

app.get('/repos', controller.retrieveAll);

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

