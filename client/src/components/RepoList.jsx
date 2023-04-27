import React from 'react';
import RepoListEntry from './RepoListEntry.jsx'


const RepoList = ({ repos }) => {

  return (
    <ol>
      {repos.map(repo=><RepoListEntry repo={repo}/>)}
    </ol>
  )
}



export default RepoList;