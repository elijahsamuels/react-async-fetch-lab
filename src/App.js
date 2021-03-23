// create your App component here


import React, {Component} from 'react';

export default class App extends Component {

	
	componentDidMount() {
		const baseURL = 'http://api.open-notify.org/astros.json'
		fetch(baseURL)
			.then(response => response.json())
			.then(data => console.log(data));

	}

	render() {
		return (
			<div></div>
		)
	}

}