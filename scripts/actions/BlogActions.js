'use strict';

import AppDispatcher from '../dispatchers/AppDispatcher.js';
import Slave from '../slaves/RemoteSlave.js';
import BlogConstants from '../constants/BlogConstants.js';

let BlogActions = {
	getPostByTitle: (title) => {
		Slave.getPostByTitle(title).then((post) => {
			AppDispatcher.handleAction({
				actionType: BlogConstants.SINGLE_POST_RECEIVED,
				data: post
			});
		});
	},

	getAllPosts: () => {
		Slave.getAllPosts().then((posts) => {
			AppDispatcher.handleAction({
				actionType: BlogConstants.POSTS_RECEIVED,
				data: posts
			});
		});
	}
};

export default BlogActions;