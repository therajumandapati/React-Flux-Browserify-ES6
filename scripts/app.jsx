'use strict';

import React from 'react';
import Router from 'react-router';
var { Route, DefaultRoute, Redirect, RouteHandler, Link } = Router;

import {Me} from './components/me.jsx';
import {Blog} from './components/blog.jsx';
import {Header} from './components/header.jsx';
import {BlogPost} from './components/blog-post.jsx';

class _App {
  mixins: [ Router.State ]
  render() {
    return (
      <div>
        <Header />
      	<RouteHandler {...this.props}/>
      </div>
    );
  }
};

var App = React.createClass(_App.prototype);

var routes = (
  <Route handler={App}>
    <DefaultRoute handler={Me} />
    <Route name="me" path="" handler={Me} />
    <Route name="blog" path="" handler={Blog} />
    <Route name="post" path="blog/:postTitle" handler={BlogPost} />

    <Redirect from="*" to="me" />
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler, state) {
  var params = state.params;
  React.render(<Handler params={params}/>, document.getElementById('content'));
});