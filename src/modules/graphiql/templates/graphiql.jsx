import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GraphiQL from 'graphiql';
import { endpoints } from '../../config/config.json';

export default class HomeComponent extends Component {

  static propTypes = {
    history: PropTypes.object
  }

  graphQLFetcher (graphQLParams) {
    return fetch(endpoints.graphql, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${ localStorage.getItem('token') }`
      },
      body: JSON.stringify(graphQLParams),
    })
      .then(response => {
        if (response.status === 401) {
          this.handleLogout().bind(this);
          return false;
        }
        return response.json();
      });
  }

  handlePrettify () {
    this.graphiql.handlePrettifyQuery();
  }

  handleHistory () {
    this.graphiql.handleToggleHistory();
  }

  handleLogout () {
    localStorage.removeItem('token');
    this.props.history.push('/');
  }

  render () {
    return <GraphiQL ref={ c => this.graphiql = c } fetcher={this.graphQLFetcher.bind(this)}>
      <GraphiQL.Toolbar>
        <GraphiQL.Button
          onClick={this.handlePrettify.bind(this)}
          label="Prettify"
          title="Prettify Query (Shift-Ctrl-P)"
        />
        <GraphiQL.Button
          onClick={this.handleHistory.bind(this)}
          label="History"
          title="Show History"
        />
        <GraphiQL.Button
          onClick={this.handleLogout.bind(this)}
          label="Logout"
          title="Logout from application"
        />
      </GraphiQL.Toolbar>
    </GraphiQL>;
  }
}
