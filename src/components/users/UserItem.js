import React from 'react' ;
import PropTypes from 'prop-types';

const UserItem = ({user: {login,avatar_url,html_url}}) => { 
 
    return (
        <div className="card text-center">
            <img src={avatar_url} className="round-img"/>
            <div>{login}</div>
            <a href={html_url} className=" btn btn-dark" >html_url</a> 
        </div>
    ) 
}
UserItem.propTypes = {
    user: PropTypes.object.isRequired
}
export default UserItem;
