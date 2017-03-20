import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {Button, FormGroup, FormControl} from 'react-bootstrap'
import '../App.css';

class PersonMainView extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			name: '',
			favoriteCity: ''
		}

		this.handleClickEdit = this.handleClickEdit.bind(this)
		this.handleClickDelete = this.handleClickDelete.bind(this)
	}

	componentDidMount() {
		this.createPerson(this.props.params.id)
		.then(json => {
			this.setState({name: json.name, favoriteCity: json.favorite_city})
		})
	}

	handleClickEdit() {
		browserHistory.push({
				pathname: '/edit-people/' + this.props.params.id,
				state: {
					name: this.state.name,
					city: this.state.favoriteCity
				}
			})
	}

	handleClickDelete() {
		return fetch('http://spotify-people-api.herokuapp.com/people/' + this.props.params.id, {
  		method: 'DELETE',
		})
		.then(response => {
			if(response.ok) {
				browserHistory.push("/")
  		} else {
  			throw new Error('Network response was not ok.')
  		}
		})
	}

	createPerson(id) {
		return fetch('http://spotify-people-api.herokuapp.com/people/' + id)
		.then(response => {
			if(response.ok) {
				return response.json();
			} else {
				throw new Error('Network response was not ok.')
			}
		})
	}

	editPerson() {
		return fetch('http://spotify-people-api.herokuapp.com/people', {
  		method: 'PUT',
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
      <div className="PersonMainView">
      	<div className="Form">
					<h1>Person:</h1>
					<div className="Input">
						<h3>Name: {this.state.name}</h3>
						<h3>Favorite City: {this.state.favoriteCity}</h3>
	    		</div>
					<Button bsStyle="warning" bsSize="large" onClick={this.handleClickEdit}>Edit</Button>{' '}
					<Button bsStyle="danger" bsSize="large" onClick={this.handleClickDelete}>Delete</Button>
				</div>
      </div>
    );
  }
}

export default PersonMainView;
