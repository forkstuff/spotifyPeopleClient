let dataFetcher = {

	fetchPeople: function() {
		return fetch('http://spotify-people-api.herokuapp.com/')
		.then(function(response) {
  		if(response.ok) {
    		return response.json();
  		} else {
  			throw new Error('Network response was not ok.')
  		}
		})
	},

	deletePerson: function(id) {
		return fetch('http://spotify-people-api.herokuapp.com/people/' + id, {
  		method: 'DELETE',
		})
		.then(response => {
			if(response.ok) {
				return true
  		} else {
  			throw new Error('Network response was not ok.')
  		}
		})
	},

	createPerson: function(data) {
		return fetch('http://spotify-people-api.herokuapp.com/people', {
  		method: 'POST',
  		headers: {
    		'Accept': 'application/json',
    		'Content-Type': 'application/json',
  		},
  		body: JSON.stringify({
    		"person": {
  				"name": data.name,
  				"favorite_city": data.favoriteCity
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
	},

	editPerson: function(data) {
		return fetch('http://spotify-people-api.herokuapp.com/people', {
  		method: 'PUT',
  		headers: {
    		'Accept': 'application/json',
    		'Content-Type': 'application/json',
  		},
  		body: JSON.stringify({
    		"person": {
  				"name": data.name,
  				"favorite_city": data.favoriteCity
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

}

export default dataFetcher