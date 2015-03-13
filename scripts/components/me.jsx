'use strict';

import React from 'react';

class Me {
	render() {
		return (
			<div>
				<div className='main-container magenta no-padding'>
					<div className='container'>
						<div className='col-xs-12 col-md-10 col-md-offset-1 me-who holder'>
							<div className='me-row'>
								<span><span className='text-white'>Problem solver</span> by <span className='text-white'>passion</span>.</span>
								<br />
								<span><span className='text-white'>Lover</span> of <span className='text-white'>beautiful designs</span>.</span>
								<br />
							</div>
						</div>
					</div>
				</div>
				<div className='main-container cream no-padding'>
					<div className='container'>
						<div className='col-xs-12 col-md-10 col-md-offset-1 me-what holder'>
							<div className='me-row'>
								<span><span className='text-white'>Solve problems</span> using <span className='text-white'>software</span>.</span>
								<br />
								<span>Create <span className='text-white'>design mockups.</span> Write <span className='text-white'>web applications</span>.</span>
								<br />
								<span><span className='text-white'>Contribute</span> to <span className='text-white'>Open Source.</span></span>
							</div>
						</div>
					</div>
				</div>
				<div className='main-container bluish-grey no-padding'>
					<div className='container'>
						<div className='col-xs-12 col-md-10 col-md-offset-1 me-why holder'>
							<div className='me-row'>
								<span>Want to leave <span className='text-white'>everything better than</span> I <span className='text-white'>found</span> it. </span>
								<br />
								<span><span className='text-white'>Help</span> people <span className='text-white'>achieve</span> their <span className='text-white'>dreams</span> by <span className='text-white'>collaborating</span>.</span>
								<br />
							</div>
						</div>
					</div>
				</div>
				<div className='main-container red no-padding'>
					<div className='container'>
						<div className='col-xs-12 col-md-10 col-md-offset-1 me-where holder'>
							<div className='me-row col-xs-12 no-padding-horizontal'>
								<div className='col-xs-12 no-padding'>
									<span><span className='text-white'>I love talking</span> to <span className='text-white'>awesome people like you.</span></span>
									<br />
									<span><span className='text-white'>Feel free</span> to <span className='text-white'>ping me</span> on the <span className='text-white'>networks below</span> to <span className='text-white'>have a chat</span>.</span>
								</div>
								<div className='col-xs-3 link github text-center'>
									<a href='http://github.com/mvpspl619'><i className="fa fa-github fa-3x"></i></a>
								</div>
								<div className='col-xs-3 link twitter text-center'>
									<a href='http://twitter.com/mvpspl619'><i className="fa fa-twitter fa-3x"></i></a>
								</div>
								<div className='col-xs-3 link facebook text-center'>
									<a href='https://www.facebook.com/venkatapathiraju.mandapati'><i className="fa fa-facebook fa-3x"></i></a>
								</div>
								<div className='col-xs-3 link linkedin text-center'>
									<a href='https://www.linkedin.com/in/venkatapathirajum'><i className="fa fa-linkedin fa-3x"></i></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default {Me : React.createClass(Me.prototype)};