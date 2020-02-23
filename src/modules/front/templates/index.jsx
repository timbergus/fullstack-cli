// @flow

import React from 'react';
import { render } from 'react-dom';
{{! // Only if we have Redux we import the Provider. }}
{{#redux}}
import { Provider } from 'react-redux';
{{/redux}}
{{! // Only if we Apollo we import the ApolloProvider. }}
{{#apollo}}
import { ApolloProvider } from 'react-apollo';
{{/apollo}}
{{! // Only if we have websockets we import the client. }}
{{#websockets}}
import io from 'socket.io-client';
{{/websockets}}
{{! // If we have redux we import the store. }}
{{#redux}}

import store from './store';
{{/redux}}
{{! // If we have Apollo we import the client. }}
{{#apollo}}

import client from './apollo/client';
{{/apollo}}
{{! // If we have routes we need to import them. }}
{{#routes}}

import Routes from './routes';
{{/routes}}
{{! // If we have no routes we will import App. }}
{{^routes}}{{^apollo}}{{^redux}}

import App from './components/app';
{{/redux}}{{/apollo}}{{/routes}}
{{! // If we don't have routes we will have only one component. }}
{{^routes}}
{{! // If we have redux we will import the counter component. }}
{{#redux}}

import CounterComponent from './components/counter';
{{/redux}}
{{! // If we have GraphQL we will import the GQL counter component. }}
{{#apollo}}

import CounterComponentGQL from './components/counter.gql';
{{/apollo}}
{{! // If we have websockets we need to establish a connection. }}
{{/routes}}
{{#websockets}}

const socket = io.connect('http://localhost:3500');

socket.on('connect', () => window.console.log('Socket connected!'));
{{/websockets}}

{{! // We pass socket as an optional property if sockets exists. }}
{{! // If we have no routes we will return App directly. }}
{{! // If we have redux, the provider will wrap the main component. }}
render(
  {{#apollo}}<ApolloProvider client={client}>{{/apollo}}{{#redux}}<Provider store={store}>{{/redux}}<{{#routes}}Routes{{/routes}}{{^routes}}{{^apollo}}{{^redux}}App{{/redux}}{{/apollo}}{{#redux}}CounterComponent{{/redux}}{{#apollo}}CounterComponentGQL{{/apollo}}{{/routes}}{{#websockets}} socket={socket}{{/websockets}} />{{#redux}}</Provider>{{/redux}}{{#apollo}}</ApolloProvider>{{/apollo}},
  window.document.getElementById('root'),
);
