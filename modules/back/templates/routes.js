// This tool verifies schemas.

const Joi = require('joi');

// These are the routes handlers.

{{#graphql}}
const { graphqlHandler } = require('./handlers/graphql');
{{/graphql}}
const { ping, createToken, decodeToken } = require('./handlers/token');

// And these are the routes.

module.exports.routes = [
  {
    method: 'GET',
    path: '/',
    config: {
      auth: false,
      tags: ['api'],
      description: 'Get the home page of the application',
      notes: 'It is needed to check if the up is running in Heroku because you need a response in /.'
    },
    handler: ping
  },
  {
    method: 'GET',
    path: '/token/get',
    config: {
      auth: false,
      tags: ['api'],
      description: 'Get a new token',
      notes: 'This is just a test route to create a token.',
      validate: {
        query: Joi.object({
          username: Joi.string().required()
        })
      }
    },
    handler: createToken
  },
  {
    method: 'GET',
    path: '/token/verify',
    config: {
      auth: 'simple',
      tags: ['api'],
      description: 'Verify a token',
      notes: 'This is just a test route to verify a token. It is needed to pass the token in the header with a Bearer authentication.',
      validate: {
        headers: Joi.object({
          authorization: Joi.string().required()
        }).options({ allowUnknown: true })
      }
    },
    handler: decodeToken
  }{{#graphql}},
  {
    method: 'POST',
    path: '/graphql',
    config: {
      auth: 'simple',
      tags: ['api'],
      description: 'Endpoint for GraphQL.',
      notes: 'Here we can ask for data using GraphQL.',
      validate: {
        headers: Joi.object({
          authorization: Joi.string().required()
        }).options({ allowUnknown: true })
      }
    },
    handler: graphqlHandler
  }{{/graphql}}
];
