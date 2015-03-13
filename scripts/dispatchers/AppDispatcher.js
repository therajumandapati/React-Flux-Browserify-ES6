'use strict';

import {Dispatcher} from 'flux';
import assign from 'object.assign';

var AppDispatcher = assign(new Dispatcher(), {
	handleAction: function(action) {
	    this.dispatch({
	      source: 'VIEW_ACTION',
	      action: action
	    });
	}
});

export default AppDispatcher;