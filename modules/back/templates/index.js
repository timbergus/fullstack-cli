// Here we import the tools we need for the server.

const chalk = require('chalk');
const Hapi = require('hapi');
//const Good = require('good');
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

const { validateFunc } = require('./auth');

// This is the Hapi server itself.
// Here we define the connection parameters (host, port and cors).

const server = new Hapi.Server({
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

/*const goodOptions = {
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
};*/

// Then we register the plugins and launch the server.

const start = async () => {
  await server.register([
    AuthBearer,
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: hapiSwaggerOptions
    }
  ]);

  server.auth.strategy('simple', 'bearer-access-token', { validate: validateFunc });

  server.auth.default('simple');

  try {
    await server.start();
    console.log(chalk.white.bgBlue(`Server running at: ${ server.info.uri }`));
  }
  catch (err) {
    console.log(err);
    process.exit(1);
  }

  server.route(routes);
};

start();

/*server.register([
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

  async function start() {

    try {
        await server.start();
        console.log(chalk.white.bgBlue(`Server running at: ${ server.info.uri }`));
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
  };

  server.route(routes);

  start();
});*/
