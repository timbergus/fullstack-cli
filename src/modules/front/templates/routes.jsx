// @flow

import React, { Component } from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';

import LoginComponent from './components/login';
import SecureComponent from './components/secure';

type Props = {};

export default class Routes extends Component<Props> {
  isLogged = () => window.localStorage.token && window.localStorage.token === '12345';

  admit = () => <Redirect to="/secure/home" />;

  expel = () => <Redirect to="/login" />;

  render() {
    return (
      <HashRouter>
        <div>
          <Route
            exact
            path="/"
            render={() => (this.isLogged()
              ? this.admit()
              : this.expel()
            )}
          />
          <Route
            exact
            path="/login"
            render={props => (this.isLogged()
              ? this.admit()
              : <LoginComponent {...props} />
            )}
          />
          <Route
            exact
            path="/secure"
            render={() => (this.isLogged()
              ? this.admit()
              : this.expel()
            )}
          />
          <Route
            path="/secure"
            render={props => (this.isLogged()
              ? <SecureComponent {...props} />
              : this.expel()
            )}
          />
        </div>
      </HashRouter>
    );
  }
}
