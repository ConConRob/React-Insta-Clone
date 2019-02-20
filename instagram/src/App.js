import React, { Component } from 'react';
import InsideApp from './components/App/InsideApp'
import Login from './components/Login/Login'
import authenticate from './components/authentication/authenticate';

import './App.css'


class App extends Component {
  state = {
    isLoggedIn: true,
    username: 'Connor',
  }
  
  render() {
    const AuthenticateInsideApp = authenticate(InsideApp)
    if(this.state.isLoggedIn){
      return <Login />
    }
    else {
      return (
        <div className="App">
          <AuthenticateInsideApp />
        </div>
      );
    } 
  }
}

export default App;
