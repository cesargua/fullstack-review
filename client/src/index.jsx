import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Parse from '../parse.js'
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import mockData from '../data/mockData.js'
import axios from 'axios';


const url = 'http://localhost:1128/repos'
const App = ({initRepos}) => {

  const [repos, setRepos] = useState(initRepos);

  const search = (term) => {
    axios.post(url, {
      username: term
    }).then(()=>{
        getAllRepos();
    }).catch(err=>{
      console.error(err)
    })
    console.log(`${term} was searched`);
  }

  const getAllRepos = () => {
    axios.get(url).then(data=>{
      setRepos(data.data);
    }).catch(err=>{
      console.error(err);
    });
  }

  useEffect(() => {
    getAllRepos();
    }, []);

  return (
    <div>
      <h1>Github Fetcher</h1>
      <div>
        <h4> Repo List Component </h4>
        There are {repos.length} repos.
      </div>
      <Search onSearch={search}/>
      <RepoList repos={repos}/>
    </div>
  );
}

// Parse.readAll(res=> {
//    ReactDOM.render(<App initRepos={res.data}/>, document.getElementById('app'));
// })


// axios.get('/repos').then((res))
ReactDOM.render(<App initRepos={mockData}/>, document.getElementById('app'));