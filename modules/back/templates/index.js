// Here we import the tools we need for the server.

const chalk = require('chalk');
const Hapi = require('hapi');
const Good = require('good');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const AuthBearer = require('hapi-auth-bearer-token');
{{ #mongodb }}{{ #mysql }}{{ #postgresql }}

{{ /postgresql }}{{ /mysql }}{{ /mongodb }}
{{ #mongodb }}
{{{ mongodb }}}
{{ /mongodb }}
{{ #mysql }}
{{{ mysql }}}
{{ /mysql }}
{{ #postgresql }}
{{{ postgresql }}}
{{ /postgresql }}

// The variable "version" contains the version of the application for Swagger.

const { version } = require('../package');

// The variable "routes" contains the routes for our REST API.

const { routes } = require('./routes');

// Validate function that validates the token in our authorization strategy for
// the routes.

const { validate } = require('./auth');

// This is the Hapi server itself.
// Here we define the connection parameters (host, port and cors).

const server = new Hapi.Server({
  host: '0.0.0.0',
  port: Number(process.env.PORT) || 1337,
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

const goodOptions = {
  reporters: {
    myConsoleReporter: [{
      module: 'good-squeeze',
      name: 'Squeeze',
      args: [{ log: '*', response: '*' }]
    }, {
      module: 'good-console'
    }, 'stdout']
  }
};

const hapiSwaggerOptions = {
  info: {
    'title': '{{ name }} API Documentation',
    'description': '{{ description }}',
    'version': version,
    'contact': {
      'name': '{{ author }}',
      'email': '{{ email }}'
    }
  },
  'host': 'localhost:1337'
};

// Then we register the plugins and launch the server.

async function start () {

  await server.register([
    AuthBearer,
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: hapiSwaggerOptions
    },
    {
      plugin: Good,
      options: goodOptions,
    }
  ]);

  server.auth.strategy('simple', 'bearer-access-token', { validate });

  server.auth.default('simple');

  try {
    server.route(routes);
    await server.start();
    console.log(chalk.white.bgBlue(`Server running at: ${ server.info.uri }`));
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

start();
