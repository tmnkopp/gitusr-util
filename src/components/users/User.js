import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import Repos from '../repos/Repos.js'; 
const User = ({user,  getUser, getUserRepos, match, repos})  =>  {

    useEffect(()=>{
         getUser( match.params.login);
         getUserRepos( match.params.login); 
    },[]);
      
    const {  name,avatar_url,location,bio,blog,html_url   } = user 
    return (
        <div>
            {name}  {location}  {bio}
            <Repos repos={repos}></Repos>
        </div>
    )
} 

User.propTypes ={
    user: PropTypes.object.isRequired,
    repos:PropTypes.array.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired 

}
export default User 