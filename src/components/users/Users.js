import React, { useContext } from 'react' ;
import UserItem from './UserItem.js';
import GithubContext from '../../context/github/githubContext'; 
const Users = () => { 
    const githubContext = useContext(GithubContext);
    const {users} = githubContext;
    return (
        <div className="row">
            {users.map( user => (
                <UserItem className="col-sm-4" key={user.id} user={user}> </UserItem>
            ))}
        </div>
    ) 
}  
export default Users;