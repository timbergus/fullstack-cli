// @flow

import React, { Component } from 'react';
{{# material-ui }}
import Button from '@material-ui/core/Button';
{{/ material-ui }}

type Props = {
  history: Object
};

type State = {};

export default class LoginComponent extends Component<Props, State> {

  login () {
    window.localStorage.token = '12345';
    this.props.history.push('/');
  }

  render () {
    return (
      <div>
        <h1>Login</h1>
        {{# material-ui }}
        <Button
          variant="contained"
          onClick={ this.login.bind(this) }
        >
          Login
        </Button>
        {{/ material-ui }}
        {{^ material-ui }}
        <button onClick={ this.login.bind(this) }>Login</button>
        {{/ material-ui }}
      </div>
    );
  }
}
