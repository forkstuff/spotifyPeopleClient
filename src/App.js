import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import {Button} from 'react-bootstrap'
import logo from './logo.png';
import './App.css';

class App extends Component {
  handleClick() {
    const path = '/create-person'
      browserHistory.push(path)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Link to="/"><img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-Header-Text">Welcome to Spotify-People</h2></Link>
          <Button className="CreatePersonButton" bsStyle="primary" onClick={this.handleClick}>Create New Person</Button>
        </div>
        { this.props.children }
      </div>
    );
  }
}

export default App;
