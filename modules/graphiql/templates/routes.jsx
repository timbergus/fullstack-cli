import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import LoginComponent from './components/login';
import GraphiQLComponent from './components/graphiql';

export default class Routes extends Component {

  isLogged () {
    return Boolean(localStorage.getItem('token'));
  }

  admit () {
    return <Redirect to="/graphiql" />;
  }

  expel () {
    return <Redirect to="/login" />;
  }

  render () {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" render={ () => {
            return this.isLogged() ? this.admit() : this.expel();
          } } />
          <Route exact path="/login" render={ props => {
            return this.isLogged() ? this.admit() : <LoginComponent { ...props } />;
          } } />
          <Route exact path="/graphiql" render={ props => {
            return this.isLogged() ? <GraphiQLComponent { ...props } /> : this.expel();
          } } />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    );
  }
}
