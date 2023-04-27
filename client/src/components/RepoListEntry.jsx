//here we display the top 25 repos depending on user selected
import React from 'react';
const RepoListEntry = ({repo})=> {
    return (
      <li><a href={repo.repo_url}>{repo.repo_name}</a>
         <ul>
            <li>forks: {repo.forks}</li>
            <li>watches: {repo.watchers}</li>
            <li>stars: {repo.stars}</li>
            <li>total count: {repo.totalCount}</li>
         </ul>
      </li>
    )
}

export default RepoListEntry;