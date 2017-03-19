import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
import '../App.css';

class PersonView extends Component {
	// componentDidMount() {
	// 	if (!this.props.hasData) {
	// 		this.fetchData(this.props.routeParams.id)
	// 	}
	// }

  render() {
    return (
      <div className="PersonView">
      	<div>Name: {this.props.name}</div>
      	<div>Favorite City: {this.props.city}</div>
      	<Button bsSize="small" bsStyle="warning">Edit</Button>{' '}
      	<Button bsSize="small" bsStyle="danger">Delete</Button>
      </div>
    );
  }
}

export default PersonView;
