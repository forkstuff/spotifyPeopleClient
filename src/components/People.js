import React, { Component } from 'react';
import '../App.css';
import PersonView from './PersonView'

class People extends Component {
  render() {
    return (
      <div className="People">
      <div className="square">
      	<PersonView/>
      </div>
      <div className="square">
      	<PersonView/>
      </div>
      <div className="square">
      	<PersonView/>
      </div>
      <div className="square">
      	<PersonView/>
      </div>
      <div className="square">
      	<PersonView/>
      </div>
      <div className="square">
      	<PersonView/>
      </div>
      </div>
    );
  }
}

export default People;
