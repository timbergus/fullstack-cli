import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { endpoints } from '../config.json';

export default class LoginComponent extends Component {

  static propTypes = {
    history: PropTypes.object
  }

  login () {
    fetch(endpoints.login)
      .then(response => response.json())
      .then(response => {
        localStorage.token = response.token;
        this.props.history.push('/');
      });
  }

  render () {
    return (
      <div className="login-container">
        <h1>GraphiQL</h1>
        <button id="login" onClick={ this.login.bind(this) }>LOGIN</button>
      </div>
    );
  }
}
