import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
import '../App.css';

class PersonView extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			name: '',
			city: ''
		}
	}
	componentDidMount() {
		if (!this.props.hasData) {
			this.fetchPerson(this.props.routeParams.id)
			.then(response => {
				this.setState({name: response.name, city: response.favorite_city})
			})
		}
	}

	fetchPerson(id) {
		return fetch('http://spotify-people-api.herokuapp.com/people/' + id)
		.then(function(response) {
  		if(response.ok) {
    		return response.json();
  		} else {
  			throw new Error('Network response was not ok.')
  		}
		})
	}

  render() {
    return (
      <div className="PersonView">
      	<div className="Info">Name: {this.props.name || this.state.name}</div>
      	<div className="Info">Favorite City: {this.props.city || this.state.city}</div>
      	<Button bsSize="small" bsStyle="warning">Edit</Button>{' '}
      	<Button bsSize="small" bsStyle="danger">Delete</Button>
      </div>
    );
  }
}

export default PersonView;
