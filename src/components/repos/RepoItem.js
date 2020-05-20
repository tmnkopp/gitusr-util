import React, {useContext} from 'react'  
import GithubContext from '../../context/github/githubContext'; 
export const RepoItem = ({repo} ) => {
    const githubContext = useContext(GithubContext);
   
    return (
        <div className="card">
            <a href={repo.html_url}>{repo.name}</a>
        </div>
    )
}
 
export default RepoItem;
