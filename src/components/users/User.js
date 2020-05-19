import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Repos from '../repos/Repos.js'; 
export class User extends Component {
    componentDidMount(){
        this.props.getUser(this.props.match.params.login);
        this.props.getUserRepos(this.props.match.params.login);
    }    
    static propTypes ={
        user: PropTypes.object.isRequired,
        repos:PropTypes.array.isRequired,
        getUser: PropTypes.func.isRequired,
        getUserRepos: PropTypes.func.isRequired 

    }
    render() {
        const {
            name,avatar_url,location,bio,blog,html_url 
        } = this.props.user
        const {
            loading, repos
        } = this.props
        return (
            <div>
                {name}
                {location}
                {bio}
                <Repos repos={repos}></Repos>
            </div>
        )
    }
} 
export default User 