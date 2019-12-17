import React from 'react';

import Login from './components/Login';

import './App.css';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <div className="App">
      <h1>Friends authentication project</h1>
      <Login />
      <FriendsList />
    </div>
  );
}

export default App;
