import React, { Fragment, useState } from 'react'; 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';  
import Navbar from './components/layout/Navbar.js';
import Users from './components/users/Users.js';
import User from './components/users/User.js';
import Search from './components/users/Search.js';
import About from  './components/pages/About.js';
import axios from 'axios'
import './App.scss';  
import Alert from './components/layout/Alert.js';

const App = () => {
    const [users,setUsers] = useState([]);
    const [user,setUser] = useState({});
    const [repos,setRepos] = useState([]);
    const [loading,setLoading] = useState(false);
    const [alert,setAlert] = useState(null);
  
    const searchUsers = async text  => {
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=$
            {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
            {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        setUsers(res.data.items); 
    }

    const clearUsers = () => setUsers([]); 
    const showAlert = (msg ,t) => {
        setAlert({msg,t}); 
        setTimeout(()=> setAlert(null), 500)
    } 
    const getUser = async (username) =>
    {
        const res = await axios.get(`https://api.github.com/users/${username}?client_id=$
            {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
            {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        setUser(res.data); 
    } 
    const getUserRepos = async (username) =>
    {
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=$
            {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
            {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        setRepos(res.data); 
    }

    return (
        <Router>
        <div className="App">
            <Navbar> </Navbar> 
            <Alert alert={ alert}></Alert>
            <Switch>
                <Route exact path='/' render={props => (
                    <Fragment>
                        <Search 
                            clearUsers={clearUsers} 
                            searchUsers={searchUsers}
                            showClear={users.length > 0 ? true : false} 
                            setAlert={showAlert}
                        ></Search>
                        <Users 
                            loading={ loading} 
                            users={users} 
                        ></Users> 
                    </Fragment>

                )} ></Route>
            <Route exact path='/About' component={About}></Route>
            <Route exact path='/user/:login' render={props => ( 
                        <User {...props} 
                        user={user}  
                        repos={repos}
                        getUserRepos={getUserRepos} 
                        getUser={getUser} 
                        />  
                )} ></Route>
            </Switch>

        </div>
        </Router>
        
    );
  
}

export default App;
