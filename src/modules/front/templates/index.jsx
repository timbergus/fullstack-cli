// @flow

import React{{^routes}}, { Component }{{/routes}} from 'react';
import { render } from 'react-dom';
{{#websockets}}
{{/websockets}}
{{#redux}}
import { Provider } from 'react-redux';
{{/redux}}
{{#material-ui}}
import { MuiThemeProvider } from 'material-ui';
{{/material-ui}}
{{#websockets}}
import io from 'socket.io-client';
{{/websockets}}
{{#redux}}

import store from './store';
{{/redux}}
{{#websockets}}

const socket = io.connect('http://localhost:1337');

socket.on('connect', () => window.console.log('Socket connected!'));
{{^routes}}

type Props = {
  socket: Object
};

type State = {};
{{/routes}}
{{/websockets}}
{{#routes}}

import Routes from './routes';
{{/routes}}
{{^routes}}

type Props = {};

type State = {};

class App extends Component<Props, State> {
{{#websockets}}

  componentWillMount () {
    this.props.socket.on('alive', () => console.log('Connection is alive!'));
  }

  componentDidMount () {
    this.props.socket.emit('isAlive');
  }

{{/websockets}}
  render () {
    return (
      <h1>Hello, World!</h1>
    );
  }
}
{{/routes}}

render(
  {{#redux}}
  <Provider store={ store }>
  {{/redux}}
  {{#material-ui}}
  {{#redux}}  {{/ redux }}<MuiThemeProvider>
  {{/material-ui}}
  {{#redux}}  {{/redux}}{{#material-ui}}  {{/material-ui}}<{{#routes}}Routes{{/routes}}{{^routes}}App{{/routes}}{{#websockets}} socket={ socket }{{/websockets}} />
  {{#material-ui}}
  {{#redux}}  {{/redux}}</MuiThemeProvider>
  {{/material-ui}}
  {{#redux}}
  </Provider>
  {{/redux}}
  , window.document.getElementById('root')
);
