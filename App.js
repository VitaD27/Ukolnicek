import React, { Component } from 'react';
import { Login } from './components/Login'
import { Register } from './components/Register'
import { Password } from './components/Password'
import { Form } from './components/Form';
    

import { Route } from 'react-router';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <div>
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/password' component={Password} /> 
        <Route path='/form' component={Form} />
        
      </div>

    );
  }
}
