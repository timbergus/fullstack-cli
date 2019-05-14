// @flow

import React from 'react';
import { render } from 'react-dom';
{{! // Only if we have redux we import the provider. }}
{{#redux}}
import { Provider } from 'react-redux';
{{/redux}}
{{! // Only if we have websockets we import the client. }}
{{#websockets}}
import io from 'socket.io-client';
{{/websockets}}
{{! // If we have redux we import the store. }}
{{#redux}}

import store from './store';
{{/redux}}
{{! // If we have routes we need to import them. }}
{{#routes}}

import Routes from './routes';
{{/routes}}
{{! // If we have no routes we will import App. }}
{{^routes}}
{{^redux}}

import App from './components/app';
{{/redux}}
{{#redux}}

import CounterComponent from './components/counter';
{{/redux}}
{{/routes}}
{{! // If we have websockets we need to establish a connection. }}
{{#websockets}}

const socket = io.connect('http://localhost:1337');

socket.on('connect', () => window.console.log('Socket connected!'));
{{/websockets}}

{{! // We pass socket as an optional property if sockets exists. }}
{{! // If we have no routes we will return Home directly. }}
{{! // If we have redux, the provider will wrap the main component. }}
render(
  {{#redux}}<Provider store={store}>{{/redux}}<{{#routes}}Routes{{/routes}}{{^routes}}{{^redux}}App{{/redux}}{{#redux}}CounterComponent{{/redux}}{{/routes}}{{#websockets}} socket={socket}{{/websockets}} />{{#redux}}</Provider>{{/redux}},
  window.document.getElementById('root'),
);
