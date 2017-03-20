import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {Button, FormGroup, FormControl} from 'react-bootstrap'
import '../App.css';

class PersonForm extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			name: '',
			favoriteCity: '',
			valid: false
		}

		this.handleChangeName = this.handleChangeName.bind(this);
		this.handleChangeCity = this.handleChangeCity.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.getValidationState = this.getValidationState.bind(this);
		this.createPerson = this.createPerson.bind(this)
	}

	handleChangeName(event) {
		const valid = this.getValidationState(event.target.value, this.state.favoriteCity)
		this.setState({name: event.target.value, valid: valid});
	}

	handleChangeCity(event) {
		const valid = this.getValidationState(event.target.value, this.state.name)
		this.setState({favoriteCity: event.target.value, valid: valid})
	}

	getValidationState(val1, val2) {
	  return (val1.length >= 1 && val2.length >= 1)
  }

	handleClick() {
		this.createPerson()
		.then(response => {
			browserHistory.push('/people/' + response.id)
		})
	}

	createPerson() {
		return fetch('http://spotify-people-api.herokuapp.com/people', {
  		method: 'POST',
  		headers: {
    		'Accept': 'application/json',
    		'Content-Type': 'application/json',
  		},
  		body: JSON.stringify({
    		"person": {
  				"name": this.state.name,
  				"favorite_city": this.state.favoriteCity
  			}
  		})
		})
		.then(response => {
			if(response.ok) {
    		return response.json();
  		} else {
  			throw new Error('Network response was not ok.')
  		}
		})
	}

  render() {
    return (
      <div className="PersonForm">
      	<div className="Form">
					<h1>Person Form</h1>
					<div className="Input">
						<FormGroup bsSize="large">
	      					<FormControl type="text" placeholder="Input Name Here" value={this.state.name} onChange={this.handleChangeName} /><br/>
	      					<FormControl type="text" placeholder="Input Favorite City Here" value={this.state.favoriteCity} onChange={this.handleChangeCity} />
	    				</FormGroup>
	    			</div>
					<Button bsStyle="success" bsSize="large" onClick={this.handleClick} disabled={!this.state.valid}>Create Person!</Button>
				</div>
      </div>
    );
  }
}

export default PersonForm;
