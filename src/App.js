import React, { Fragment, useState } from 'react'; 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';  
import Navbar from './components/layout/Navbar.js';
import Users from './components/users/Users.js';
import User from './components/users/User.js';
import Search from './components/users/Search.js';
import About from  './components/pages/About.js'; 
import GithubState from './context/github/githubState';
import AlertState from './context/alert/alertState';
import './App.scss';  
import Alert from './components/layout/Alert.js';

const App = () => {   
 
    return (
        <GithubState>
            <AlertState>
            <Router>
            <div className="App">
                <Navbar> </Navbar> 
                <Alert  ></Alert>
                <Switch>
                    <Route exact path='/' render={props => (
                        <Fragment>
                            <Search ></Search>
                            <Users  ></Users> 
                        </Fragment> 
                    )} ></Route>
                <Route exact path='/About' component={About}></Route>
                <Route exact path='/user/:login' component={User}></Route>
                </Switch> 
            </div>
            </Router>
            </AlertState>
        </GithubState>
    );
  
}

export default App;
