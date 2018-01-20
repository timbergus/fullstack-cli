import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { endpoints } from '../config.json';
import { md5 } from '../utils';

export default class LoginComponent extends Component {

  static propTypes = {
    history: PropTypes.object
  }

  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  login () {
    const { username, password } = this.state;
    fetch(`${ endpoints.login }?username=${ username }&password=${ md5(password) }`)
      .then(response => response.json())
      .then(response => {
        if (response.token) {
          localStorage.token = response.token;
          this.props.history.push('/');
        }
      });
  }

  onChange (event) {
    this.setState(Object.assign(this.state, {
      [event.target.name]: event.target.value
    }));
  }

  render () {
    return (
      <div className="login-container">
        <h1>GraphiQL</h1>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={ this.state.username }
          onChange={ this.onChange.bind(this) }
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={ this.state.password }
          onChange={ this.onChange.bind(this) }
        />
        <button id="login" onClick={ this.login.bind(this) }>LOGIN</button>
      </div>
    );
  }
}
