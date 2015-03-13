'use strict';

import React from 'react';

class BlogPostSimple {

	getInitialState() {
		return {
			post: this.props.post
		}
	}

	render() {
		return (
			<div className='blog-post-simple'>
				<a href={'blog/' + this.state.post.link}><span className='title'>{this.state.post.title}</span></a>
				<span> - </span>
				<span className='date'>{this.state.post.date}</span>
			</div>
		);
	}
}

export default {BlogPostSimple : React.createClass(BlogPostSimple.prototype)};