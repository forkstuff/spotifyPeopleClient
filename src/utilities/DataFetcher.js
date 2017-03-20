const PEOPLE_ROUTE = "http://spotify-people-api.herokuapp.com/people/"
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
}

function handleResponse(response) {
	if (response.ok) {
		return response.json()
	} else {
		throw new Error('Network response was not ok.')
	}
}

let dataFetcher = {

	fetchPeople: function() {
		return fetch(PEOPLE_ROUTE)
		.then(function(response) {
  		return handleResponse(response)
		})
	},

	deletePerson: function(id) {
		return fetch(PEOPLE_ROUTE + id, {
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
		return fetch(PEOPLE_ROUTE, {
  		method: 'POST',
  		headers: headers,
  		body: JSON.stringify({
    		"person": {
  				"name": data.name,
  				"favorite_city": data.favoriteCity
  			}
  		})
		})
		.then(response => {
			return handleResponse(response)
		})
	},

	editPerson: function(data, id) {
		return fetch(PEOPLE_ROUTE + id, {
  		method: 'PUT',
  		headers: headers,
  		body: JSON.stringify({
    		"person": {
  				"name": data.name,
  				"favorite_city": data.favoriteCity
  			}
  		})
		})
		.then(response => {
			return handleResponse(response)
		})
	},

	getPerson: function(id) {
		return fetch(PEOPLE_ROUTE + id)
		.then(response => {
			return handleResponse(response)
		})
	}

}

export default dataFetcher