import React, { Component } from 'react';  
import Navbar from './components/layout/Navbar.js';
import Users from './components/users/Users.js';
import Search from './components/users/Search.js';
import axios from 'axios'
import './App.scss';

class App extends Component {  
    state = {
        users: [],
        loading: true 
    }
    async componentDidMount(){
  
        this.setState({ loading: true});
        const res = await axios.get(`https://api.github.com/users?client_id=$
        {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
        {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        this.setState({ loading: false});
        this.setState({ users: res.data}); 
    }

    render(){      
        return (
            <div className="App">
               <Navbar></Navbar> 
               <Search></Search>
               <Users loading={this.state.loading} users={this.state.users}></Users>
            </div>
        );
    }
}

export default App;
