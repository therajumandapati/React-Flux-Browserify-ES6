'use strict';

import AppDispatcher from '../dispatchers/AppDispatcher.js';
import BlogConstants from '../constants/BlogConstants.js';
import {EventEmitter} from 'events';
import assign from 'object.assign';

let blogs = [];
let blog = {};

let CHANGE_EVENT="change";

class BlogStore extends EventEmitter {
	getPosts() {
		return blogs;
	}

	getSinglePost(link) {
		if(blog.link === link) return blog;
		return null;
	}

	emitChange() {
		this.emit(CHANGE_EVENT);
	}

	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	}

	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}

};

var blogStore = new BlogStore();

AppDispatcher.register((payload) => {
	var action = payload.action;
	switch(action.actionType) {
		case BlogConstants.POSTS_RECEIVED:
			blogs = action.data;
			blogStore.emitChange();
			break;
		case BlogConstants.SINGLE_POST_RECEIVED:
			blog = action.data;
			blogStore.emitChange();
			break;
		default:
			break;
	}
});

export default blogStore;