import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-Header-Text">Welcome to Spotify-People</h2>
        </div>
        { this.props.children }
      </div>
    );
  }
}

export default App;
