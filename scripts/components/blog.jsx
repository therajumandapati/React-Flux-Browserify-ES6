'use strict';

import React from 'react';

import {BlogPostSimple} from './blog-post-simple.jsx';
import BlogActions from '../actions/BlogActions.js';
import BlogStore from '../stores/BlogStore.js';

class Blog {

	getInitialState() {
		return {
			posts: BlogStore.getPosts()
		}
	}

	componentWillMount() {
		BlogStore.addChangeListener(this._onChange);
		if(this.state.posts.length === 0) {
			BlogActions.getAllPosts();
		}
	}

	componentWillUnmount() {
		BlogStore.removeChangeListener(this._onChange);
	}

	_onChange() {
		this.setState({
			posts: BlogStore.getPosts()
		})
	}

	buildPostsMarkup() {
		return this.state.posts.map(p => {
			return (
				<BlogPostSimple key={p.title+p.time} post={p} />
			);
		});
	}

	render() {
		return (
			<div className="main-container yellow">
				<div className='container'>
					<div className='col-xs-12 col-md-8 col-md-offset-2 holder blog'>
						{this.buildPostsMarkup()}
					</div>
				</div>
			</div>
		);
	}
}

export default {Blog : React.createClass(Blog.prototype)};