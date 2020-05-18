import React, { Component } from 'react'
import PropTypes from 'prop-types';
import UserItem from './UserItem.js';
const Users = ({users}) => { 
    return (
        <div className="row">
            {users.map( user => (
                <UserItem className="col-sm-4" key={user.id} user={user}> </UserItem>
            ))}
        </div>
    ) 
} 
Users.propTypes={
    users:PropTypes.array.isRequired
}
export default Users;