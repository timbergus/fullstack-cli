// @flow

import React, { Component } from 'react';
{{# material-ui }}

import Button from '@material-ui/core/Button';
{{/ material-ui }}

type Props = {
  history: Object
};

export default class LoginComponent extends Component<Props> {
  login = () => {
    const { history } = this.props;
    window.localStorage.token = '12345';
    history.push('/');
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        {{# material-ui }}
        <Button
          variant="contained"
          color="primary"
          onClick={this.login}
        >
          Login
        </Button>
        {{/ material-ui }}
        {{^ material-ui }}
        <button type="button" onClick={this.login}>Login</button>
        {{/ material-ui }}
      </div>
    );
  }
}
