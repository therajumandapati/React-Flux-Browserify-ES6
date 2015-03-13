'use strict';

import React from 'react';
import Remarkable from 'remarkable';
import BlogStore from '../stores/BlogStore.js';
import BlogActions from '../actions/BlogActions.js';

var md = new Remarkable();

class BlogPost {

	getInitialState() {
		return {
			post: BlogStore.getSinglePost(this.props.params.postTitle)
		}
	}

	componentWillMount() {
		BlogStore.addChangeListener(this._onChange);
		console.log('component mounting');
		console.log(this.state);
		if(!this.state.post) {
			BlogActions.getPostByTitle(this.props.params.postTitle);
		}
	}

	componentWillUnmount() {
		BlogStore.removeChangeListener(this._onChange);
	}

	_onChange() {
		this.setState({
			post: BlogStore.getSinglePost(this.props.params.postTitle)
		})
	}

	getHtmlFromMarkdown(markdown) {
		return (
			<div dangerouslySetInnerHTML={{__html: md.render(markdown)}}></div>
		);
	}

	render() {
		if(this.state.post) {
			return (
				<div className='main-container blue'>
					<div className='container'>
						<div className='col-xs-12 col-md-offset-1 col-md-10 holder blog-post'>
							<div className='col-xs-12 title'>
								<span>{this.state.post.title}</span>
							</div>
							<div className='col-xs-12 date'>
								<span>{this.state.post.date}</span>
							</div>
							<div className='col-xs-12 blog-post-content'>
								<span>{this.getHtmlFromMarkdown(this.state.post.content)}</span>
							</div>
						</div>
					</div>
				</div>
			);
		}
		return (
			<div className='main-container blue'>
				<div className='container'>
					<div className='col-xs-12 col-md-offset-1 col-md-10 holder blog-post'>
						<div className='loader'>
							post not found :(
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default {BlogPost : React.createClass(BlogPost.prototype)};