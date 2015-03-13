'use strict';

import React from 'react';
import HelloWorld from './components/hello-world.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <HelloWorld />
      </div>
    );
  }
};

React.render(<App />, document.getElementById('main'));