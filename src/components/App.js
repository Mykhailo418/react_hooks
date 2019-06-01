import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './Form';

class App extends Component{
    static propTypes = {}

    render(){
      return (
        <div className="container">
          <h1>React Hooks</h1>
          <Form />
        </div>
      );
    }
}

export default App;
