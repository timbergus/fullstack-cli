// Here we import the tools we need for the server.

const chalk = require('chalk');
const Hapi = require('hapi');
const Good = require('good');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const AuthBearer = require('hapi-auth-bearer-token');

{{# ddbb}}
{{{ value }}}
{{/ ddbb}}

// The variable "version" contains the version of the application for Swagger.

const { version } = require('../package');

// The variable "routes" contains the routes for our REST API.

const { routes } = require('./routes');

// Validate function that validates the token in our authorization strategy for
// the routes.

const { validateFunc } = require('./auth');

// This is the Hapi server itself.

const server = new Hapi.Server();

// Here we define the connection parameters (host, port and cors).

server.connection({
  host: '0.0.0.0',
  port: parseInt(process.env.PORT, 10) || 1337,
  routes: {
    cors: {
      origin: ['*']
    }
  }
});

{{# websockets }}
require('./sockets')(server.listener);
{{/ websockets }}

// And here we define the configuration for Swagger and Good.

const hapiSwaggerOptions = {
  info: {
    'title': 'Test API Documentation',
    'description': 'Move your app forward with the Uber API',
    'version': version,
    'contact': {
      'name': 'Gustavo Muñoz',
      'email': 'timbergus@gmail.com'
    }
  },
  'host': 'localhost:1337'
};

var goodOptions = {
  reporters: {
    console: [
      {
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [
          {
            response: '*',
            log: '*'
          }
        ]
      },
      {
        module: 'good-console'
      },
      'stdout'
    ]
  }
};

// Then we register the plugins and launch the server.

server.register([
  AuthBearer,
  Inert,
  Vision,
  {
    register: HapiSwagger,
    options: hapiSwaggerOptions
  },
  {
    register: Good,
    options: goodOptions
  }
], error => {

  if (error) {
    throw error;
  }

  // Here we add a new authentication strategy to our server.

  server.auth.strategy('simple', 'bearer-access-token', { validateFunc });

  // And the routes.

  server.route(routes);

  server.start(err => {
    if (err) {
      throw err;
    }
    console.log(chalk.white.bgBlue(`Server running at: ${ server.info.uri }`));
  });
});
