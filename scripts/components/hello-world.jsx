'use strict';

import React from 'react';
import HelloActions from '../actions/HelloActions.js';
import HelloStore from '../stores/HelloStore.js';

export default class HelloWorld extends React.Component {

	constructor(props) {
		super(props);
		this.state = HelloStore.getState();
	}

	componentWillMount() {
		HelloStore.addChangeListener(this._onChange.bind(this));
		if(this.state.message === '') {
			HelloActions.fetch();
		}
	}

	componentWillUnmount() {
		HelloStore.addRemoveListener(this._onChange.bind(this));
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