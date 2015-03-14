'use strict';

import AppDispatcher from '../dispatchers/AppDispatcher.js';
import HelloConstants from '../constants/HelloConstants.js';
import {EventEmitter} from 'events';
import assign from 'object.assign';

let data = {
	message: ''
};

class HelloStore extends EventEmitter {

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

let _HelloStore = new HelloStore();

export default _HelloStore;

AppDispatcher.register((payload) => {
	let action = payload.action;
	switch(action.type) {
		case HelloConstants.FETCHING:
			data = action.data;
			_HelloStore.emitChange();
			break;
		default:
			break;
	}
});