import React, { Component } from 'react';
import { Link } from 'react-router';
import {Button} from 'react-bootstrap'
import '../App.css';

class PersonView extends Component {
  render() {
    return (
      <div className="PersonView">
      	<div className="Info">Name: {this.props.name}</div>
      	<div className="Info">Favorite City: {this.props.city}</div>
      	<Button bsSize="small" bsStyle="warning" onClick={this.props.onClickEdit}>Edit</Button>{' '}
      	<Button bsSize="small" bsStyle="danger" onClick={this.props.onClickDelete}>Delete</Button>{' '}
      	<Link to={"/people/" + this.props.id}><Button bsSize="small" bsStyle="primary">Main View</Button></Link>
      </div>
    );
  }
}

export default PersonView;
