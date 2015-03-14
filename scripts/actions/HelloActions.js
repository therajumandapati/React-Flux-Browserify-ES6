'use strict';

import AppDispatcher from '../dispatchers/AppDispatcher.js';
import HelloConstants from '../constants/HelloConstants.js';
import HelloSlave from '../slaves/HelloSlave.js';

export default {
	fetch: () => {
		HelloSlave.fetch().then((data) => {
			AppDispatcher.handleAction({
				type: HelloConstants.FETCHING,
				data: data
			});
		})
	}
}