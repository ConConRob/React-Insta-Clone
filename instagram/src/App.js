import React, { Component } from 'react';
import InsideApp from './components/App/InsideApp'
import authenticate from './components/authentication/authenticate';
import './App.css'


class App extends Component {
  
  
  render() {
    const AuthenticateInsideApp = authenticate(InsideApp)
    return (
      <div className="App">
        <AuthenticateInsideApp />
      </div>
    );
  }
}

export default App;
