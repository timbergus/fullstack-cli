# Fullstack CLI (FSC)

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Introduction

This is a tool to create a full environment with a backend based in [Node.js](https://nodejs.org/en/), and a frontend based on [React](https://reactjs.org/).

It also allows you to create a tool to access your [GraphQL](http://graphql.org/) endpoint in your backend, using the React component of [GraphiQL](https://github.com/graphql/graphiql).

## Technology

FSC uses a simple form structure that asks the user to configure the project throw a bunch of steps using [inquirer.js](https://github.com/SBoudrias/Inquirer.js/).

The tool is written in plain Node.js (no compilers needed), and to use it, you just need to install it from [NPM](https://www.npmjs.com/package/fullstack-cli) like this:

```bash
npm -g install fullstack-cli
```

After the installation execute in your terminal __fsc__ and choose the type of project you want to create. Each project inside has the steps to install the tools and the libraries needed.

## Frontend

We are using [WebPack](https://webpack.github.io/) as development environment, and NPM scripts to automatize the process.

After introducing the project name, the options that offers the creation wizard are:

* __Websockets:__ If you need websockets, install them selecting this option. This creates an connection using [socket-io-client](https://github.com/socketio/socket.io-client) in the `index.jsx` file and listen to connections from the websockets in the backend.

* __Material-UI:__ If you want to add a CSS framework to your project, I have choose [Material-UI](http://www.material-ui.com). It is a great framework based on Google's Material Design and has a lot of great tools and components. Of course, you can omit this step and add your own styles or preferred framework ([Semantic UI React](https://react.semantic-ui.com/introduction) is another great framework to work with).

* __Redux:__ Here you can decide to install [Redux](https://redux.js.org/) in your application. Redux is an amazing tool that keeps your application state. It's hard to understand the data flow inside a modern web application without this kind of tools nowadays.

* __Routes:__ If you are going to make something complex with more that one page, this is your module. It uses [react-router](https://reacttraining.com/react-router/) to create a simple structure of a few pages behind a login. Be careful because we are using the forth version, and it breaks totally from pervious ones.

After this steps, we ask for basic information to create the `package.json` of the application.

Then, the packages are installed, and a few instructions appears to let you know how to start developing your new platform.

Not choosing any packages during the creation process, creates the simplest React application you can have, just to start building from scratch.

## Backend

The backend wizard start more or less the same. It asks for the project's name.

After that, it follow this steps:

* __Databases:__ First of all, the wizard ask you which databases needs your back to connect to, in order to install the basic connector structure for each one. Right now, we offer connections for [MongoDB](https://www.mongodb.com/) (that also add a [GraphQL](http://graphql.org/) layer if needed), [MySQL](https://www.mysql.com/) and [PostgreSQL](https://www.postgresql.org/). You can install all of them if needed.

  * For MongoDB we are going to use [Mongoose](http://mongoosejs.com/) as ODM.
  * For MySQL we are going o use [mysqljs](https://github.com/mysqljs/mysql).
  * For PostgreSQL we are going o use [node-postgres](https://github.com/brianc/node-postgres).

* __Websockets:__ If you are going to use websockets, this option installs and configures a websocket endpoint using [Socket.io](https://socket.io/). It just listen for connections, and ads a listener for `isAlive` message for testing purpose.

* __GraphQL:__ If you have selected MongoDB as database, you can also configure an endpoint for [GraphQL](http://graphql.org/), and amazing database concept created by Facebook. The main idea is to allow the client to ask for the data needed instead of having thematic endpoints. This allow us to filter the info in the server, and send smaller packages with only the needed data.

Then, the packages are installed, and a few instructions appears to let you know how to start developing your new platform.

The chosen framework for the back is [Hapi](https://hapijs.com/) (using [Good](https://github.com/hapijs/good) as logger tool, in this case, only through console).

The tool for the API description is [Swagger](https://swagger.io/) (using [hapi-swagger](https://github.com/glennjones/hapi-swagger)).

The security is based in [JWT](https://jwt.io/) (using [hapi-auth-bearer-token](https://github.com/johnbrett/hapi-auth-bearer-token)).

The project is based on plain Node.js (no transpilers), so we are still using the old import method using `require` instead of `import`.

To configure each database connection, there are configuration files inside the __config__ folder. The API will try to connect to your databases, so if you don't configure the connection properly, it will throw an error.

## GraphiQL Tool

This is the [GraphiQL](https://github.com/graphql/graphiql) React component integrated in an application. The only options of the project are the needed for the `package.json`.

Then, the packages are installed, and a few instructions appears to let you know how to start developing your new platform.
