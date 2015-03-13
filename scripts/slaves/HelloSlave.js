'use strict';

import q from 'q';

export default {
	fetch: () => {
		let deferred = q.defer();

		setTimeout(() => {
			deferred.resolve({
				message: "What's up ?"
			})
		}, 500)

		return deferred.promise;
	}
}