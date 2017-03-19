import React, { Component } from 'react';
import '../App.css';
import PersonView from './PersonView'

class People extends Component {
  render() {
    return (
      <div className="People">
      <div className="square">
      <div className="content">
      <div className="table">
      <div className="table-cell"> 
      	<PersonView name="mendel" city="nyc"/>
      </div>
      </div>
      </div>
      </div>
      <div className="square">
      <div className="content">
      <div className="table">
      <div className="table-cell"> 
      	<PersonView name="John" city="nyc"/>
      </div>
      </div>
      </div>
      </div>
      <div className="square">
      <div className="content">
      <div className="table">
      <div className="table-cell"> 
      	<PersonView name="Sara" city="nyc"/>
      </div>
      </div>
      </div>
      </div>
      <div className="square">
      <div className="content">
      <div className="table">
      <div className="table-cell"> 
      	<PersonView name="Donna" city="nyc"/>
      </div>
      </div>
      </div>
      </div>
      <div className="square">
      <div className="content">
      <div className="table">
      <div className="table-cell"> 
      	<PersonView name="Kevin" city="nyc"/>
      </div>
      </div>
      </div>
      </div>
      <div className="square">
      <div className="content">
      <div className="table">
      <div className="table-cell"> 
      	<PersonView name="Hillary" city="nyc"/>
      </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
}

export default People;
