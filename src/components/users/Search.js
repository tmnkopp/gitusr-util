import React, { Component, useState } from 'react'
import PropTypes from 'prop-types';
const Search = ({searchUsers, showClear, clearUsers, setAlert}) => {
    const [text, setText] = useState(''); 

    const onSubmit = (e) => {
        e.preventDefault(); 
        if(text === ''){
            setAlert('Please enter', 'light')
        }else{
            searchUsers(text);
            setText('');
        }
    }
    const onChange = e => setText(e.target.value)
       
    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input type="text" name="text" placeholder="Search.." 
                value={text}
                onChange={onChange}
                ></input> 
                <input type="submit" value="search"></input>
                {showClear &&
                    <input type="button" value="clear" onClick={clearUsers}></input>
                }
            </form>
        </div>
    ) 
} 

Search.propTypes = {
    searchUsers:  PropTypes.func.isRequired ,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
}
export default Search 