'use strict';

import AppDispatcher from '../dispatchers/AppDispatcher.js';
import HelloConstants from '../constants/HelloConstants.js';
import HelloSlave from '../actions/HelloSlave.js';

export default {
	fetch: () => {
		HelloSlave.fetch().then((data) => {
			AppDispatcher.handleActions({
				type: HelloConstants.FETCHING,
				data: data
			});
		})
	}
}