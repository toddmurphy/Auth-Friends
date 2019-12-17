import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import FriendsList from './components/FriendsList';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/FriendsList' component={FriendsList} />
      </Switch>
    </div>
  );
}

export default App;
