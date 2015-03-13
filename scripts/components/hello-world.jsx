'use strict';

import React from 'react';
import HelloActions from '../actions/HelloActions.js';
import HelloStore from '../stores/HelloStore.js';

export default class HelloWorld extends React.Component {

	getInitialState() {
		return HelloStore.getState()
	}

	componentWillMount() {
		HelloStore.addChangeListener(this._onChange);
		if(this.state.message === '') {
			HelloActions.fetch();
		}
	}

	componentWillUnmount() {
		HelloStore.addRemoveListener(this._onChange);
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