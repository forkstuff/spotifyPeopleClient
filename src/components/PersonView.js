import React, { Component } from 'react';
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
      	Name: <div>Mendel</div>
      	Favorite City<div>NYC</div>
      </div>
    );
  }
}

export default PersonView;
