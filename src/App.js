import React, { Fragment, Component } from 'react'; 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';  
import Navbar from './components/layout/Navbar.js';
import Users from './components/users/Users.js';
import User from './components/users/User.js';
import Search from './components/users/Search.js';
import About from  './components/pages/About.js';
import axios from 'axios'
import './App.scss';  
import Alert from './components/layout/Alert.js';

class App extends Component {  
    state = {
        users: [],
        user:{},   
        repos:[],
        loading: true ,
        alert: null
    }
    clearUsers = () =>  this.setState({ users: []});
   
    setAlert = (msg ,t) => {
        this.setState({alert: {msg,t}}); 
        setTimeout(()=> this.setState({alert:null}), 500)
    }

    searchUsers = async text  => {
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=$
            {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
            {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
            this.setState({ users: res.data.items}); 
    }

    getUser = async (username) =>
    {
        const res = await axios.get(`https://api.github.com/users/${username}?client_id=$
        {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
        {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        this.setState({ user: res.data}); 
    }

    getUserRepos = async (username) =>
    {
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=$
        {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
        {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        this.setState({ repos: res.data}); 
    }

    render(){      
        const {users, user, repos} = this.state;  
        return (
          <Router>
            <div className="App">
               <Navbar> </Navbar> 
               <Alert alert={this.state.alert}></Alert>
               <Switch>
                    <Route exact path='/' render={props => (
                        <Fragment>
                            <Search 
                                    clearUsers={this.clearUsers} 
                                    searchUsers={this.searchUsers}
                                    showClear={users.length > 0 ? true : false} 
                                    setAlert={this.setAlert}
                            ></Search>
                            <Users 
                                    loading={this.state.loading} 
                                    users={users} 
                            ></Users> 
                        </Fragment>

                    )} ></Route>
                <Route exact path='/About' component={About}></Route>
                <Route exact path='/user/:login' render={props => ( 
                            <User {...props} 
                            user={user}  
                            repos={repos}
                            getUserRepos={this.getUserRepos} 
                            getUser={this.getUser} 
                            />  
                    )} ></Route>
               </Switch>
   
            </div>
          </Router>
          
        );
    }
}

export default App;
