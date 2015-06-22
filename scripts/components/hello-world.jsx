'use strict';

import React from 'react';
import HelloActions from '../actions/HelloActions.js';
import HelloStore from '../stores/HelloStore.js';

export default class HelloWorld extends React.Component {

	constructor(props) {
		super(props);
		this.state = HelloStore.getState();
		// In ES6, no autobinding of 'this'. We create a callback bindid function to use with EventEmitter 
		this.changeCallback = this._onChange.bind(this);
	}

	componentWillMount() {
		HelloStore.addChangeListener(this.changeCallback);
		if(this.state.message === '') {
			HelloActions.fetch();
		}
	}

	componentWillUnmount() {
		HelloStore.removeChangeListener(this.changeCallback);
	}

	_onChange() {
		this.setState(HelloStore.getState())
	}

	render() {
		return (
			<h1>{this.state.message}</h1>
		);
	}
}