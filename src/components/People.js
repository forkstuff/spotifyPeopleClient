import React, { Component } from 'react';
import '../App.css';
import PersonView from './PersonView'

class People extends Component {
	constructor(props) {
		super(props);
		this.fetchPeople = this.fetchPeople.bind(this)

		this.state = {
			loaded: false,
			people: []
		}
	}

	componentDidMount() {
		this.fetchPeople()
		.then(json => {
			this.setState({people: json, loaded: true})
		})
	}

	fetchPeople() {
		return fetch('http://spotify-people-api.herokuapp.com/')
		.then(function(response) {
  		if(response.ok) {
    		return response.json();
  		} else {
  			throw new Error('Network response was not ok.')
  		}
		})
	}

  render() {
  	var people = this.state.people.map((person, index) => {
      return (<div key={index} className="square">
	      <div className="content">
		      <div className="table">
			      <div className="table-cell"> 
			      	<PersonView name={person.name} city={person.favorite_city}/>
			      </div>
			    </div>
	      </div>
      </div>)
  	})
    return (
	      this.state.loaded ?
      	<div className="People">
	      	{people}
	      </div>
	      :
	      <div className="People">
	      	Loading...
      	</div>
    );
  }
}

export default People;
