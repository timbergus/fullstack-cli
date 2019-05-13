// @flow

import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
{{# material-ui }}
import Button from '@material-ui/core/Button';
{{/ material-ui }}

import HomeComponent from './home';
import ProfileComponent from './profile';
import AboutComponent from './about';

type Props = {
  history: Object
};

export default class SecureComponent extends Component<Props> {
  logout = () => {
    const { history } = this.props;
    Reflect.deleteProperty(localStorage, 'token');
    history.push('/login');
  }

  render() {
    return (
      <div>
        <nav>
          <NavLink to="/secure/home" activeClassName="active">Home</NavLink>
          <NavLink to="/secure/profile" activeClassName="active">Profile</NavLink>
          <NavLink to="/secure/about" activeClassName="active">About</NavLink>
        </nav>
        {{# material-ui }}
        <Button
          variant="contained"
          color="secondary"
          onClick={this.logout.bind(this)}
          className="home-button"
        >
          Logout
        </Button>
        {{/ material-ui }}
        {{^ material-ui }}
        <button type="button" onClick={this.logout.bind(this)}>Logout</button>
        {{/ material-ui }}
        <Route path="/secure/home" component={HomeComponent} />
        <Route path="/secure/profile" component={ProfileComponent} />
        <Route path="/secure/about" component={AboutComponent} />
      </div>
    );
  }
}
