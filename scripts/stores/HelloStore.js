'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher.js';
import HelloConstants from '../constants/HelloConstants.js';
import {EventEmitter} from 'events';
import assign from 'object.assign';

let data;

export default class HelloStore extends EventEmitter {

	getState() {
		return data;
	}

	emitChange() {
		this.emit('CHANGE');
	}

	addChangeListener(cb) {
		this.on('CHANGE', cb)
	}

	removeChangeListener(cb) {
		this.removeListener('CHANGE', cb);
	}
}

AppDispatcher.register((payload) => {
	let action = payload.action;
	switch(action.type) {
		case HelloConstants.FETCHING:
			data = action.data;
			break;
		default:
			break;
	}
});