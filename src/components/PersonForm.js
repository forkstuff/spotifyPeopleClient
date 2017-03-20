import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import dataFetcher from '../utilities/DataFetcher'
import {Button, FormGroup, FormControl} from 'react-bootstrap'
import '../App.css';

class PersonForm extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			name: '',
			favoriteCity: '',
			valid: false,
			editForm: false
		}

		this.handleChangeName = this.handleChangeName.bind(this);
		this.handleChangeCity = this.handleChangeCity.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.getValidationState = this.getValidationState.bind(this);
	}

	componentDidMount() {
		var data = this.props.location.state
		if (data && this.props.location.pathname !== '/create-person') {
			this.setState({name: data.name, favoriteCity: data.city, editForm: true})
		} else {
			this.setState({name: '', favoriteCity: ''})
		}
	}

	componentWillReceiveProps(nextProps) {
		var data = this.props.location.state
		if (data && nextProps.location.pathname !== '/create-person') {
			this.setState({name: data.name, favoriteCity: data.city, editForm: true})
		} else {
			this.setState({name: '', favoriteCity: ''})
		}
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

	handleSubmit(e) {
		e.preventDefault()
		if (this.state.editForm) {
			dataFetcher.editPerson(this.state)
			.then(response => {
				browserHistory.push('/people/' + response.id)
			})
		} else {
			dataFetcher.createPerson(this.state)
			.then(response => {
				browserHistory.push('/people/' + response.id)
			})
		}
	}

  render() {
    return (
      <div className="PersonForm">
      	<div className="Form">
					<h1>Person Form</h1>
					<div className="Input">
						<form onSubmit={this.handleSubmit}>
							<FormGroup bsSize="large">
		      			<FormControl type="text" placeholder="Input Name Here" value={this.state.name} onChange={this.handleChangeName} /><br/>
		      			<FormControl type="text" placeholder="Input Favorite City Here" value={this.state.favoriteCity} onChange={this.handleChangeCity} />
		    			</FormGroup>
							<Button type="submit" bsStyle="success" bsSize="large" onClick={this.handleSubmit} disabled={!this.state.valid}>Submit!</Button>
		    		</form>
		    	</div>
				</div>
      </div>
    );
  }
}

export default PersonForm;
