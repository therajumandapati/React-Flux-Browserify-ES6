'use strict';

import React from 'react';

class Header {

	render() {
		return (
			<div className='main-container'>
				<div className='container'>
					<div className='col-xs-12 col-md-10 col-md-offset-1'>
						<div className='col-xs-12 no-padding'>
							<div className='profile-header'>
								<a className='no-padding' href='/'><img src='/dist/images/profile.png' /></a>
								<a href='/'>MVP</a>
							</div>
							<div className='profile-menu'>
								<a className='btn btn-default' href='/blog'>blog</a>
							</div>
						</div>
					</div>	
				</div>
			</div>
		);
	}
}

export default {Header : React.createClass(Header.prototype)};