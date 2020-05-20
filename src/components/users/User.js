import React, { useEffect, useContext } from 'react'
import PropTypes from 'prop-types';
import Repos from '../repos/Repos.js'; 
import GithubContext from '../../context/github/githubContext'; 
const User = ({ match })  =>  {

    const githubContext = useContext(GithubContext);
    const { getUser, getUserRepos, user, repos } = githubContext;
    useEffect(()=>{
        getUser( match.params.login);
        getUserRepos( match.params.login); 
    },[]);
   
    const {  name,avatar_url,location,bio,blog,html_url   } = user 
    return (
        <div>
            {name}  {location}  {bio}
            <Repos repos={repos} ></Repos>
        </div>
    )
} 
 
export default User 