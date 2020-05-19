import React, { Component } from 'react'
import PropTypes from 'prop-types';
export class Search extends Component {
    state = {
        text:'' 
    } 
  
    static propTypes = {
        searchUsers:  PropTypes.func.isRequired ,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired
    }
    onSubmit = (e) => {
        e.preventDefault(); 
        if(this.state.text === ''){
            this.props.setAlert('Please enter', 'light')
        }else{
            this.props.searchUsers(this.state.text);
            this.setState({text:''});
        }
         
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    } 
    render() {
        const {showClear, clearUsers} = this.props;
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)} className="form">
                    <input type="text" name="text" placeholder="Search.." 
                    value={this.state.text}
                    onChange={this.onChange}
                    ></input> 
                    <input type="submit" value="search"></input>
                    {showClear &&
                    <input type="button" value="clear" onClick={clearUsers}></input>
                    }
                    
                </form>
            </div>
        )
    }
} 
export default Search 