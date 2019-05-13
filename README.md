# Fullstack-CLI

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Greenkeeper badge](https://badges.greenkeeper.io/timbergus/fullstack-cli.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/timbergus/fullstack-cli.svg?branch=master)](https://travis-ci.org/timbergus/fullstack-cli)
[![codecov](https://codecov.io/gh/timbergus/fullstack-cli/branch/master/graph/badge.svg)](https://codecov.io/gh/timbergus/fullstack-cli)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/fdedb56c4f634970b8c78922310546a3)](https://app.codacy.com/app/timbergus/fullstack-cli?utm_source=github.com&utm_medium=referral&utm_content=timbergus/fullstack-cli&utm_campaign=Badge_Grade_Dashboard)

> __WARNING:__ From v1.0.10, the GraphiQL project has been removed in favor of [GraphQL Playground](https://github.com/prisma/graphql-playground) tool from Prisma team. No need to reinvent the wheel.

## Introduction

This is a tool for Fullstack Developers, to create the full stack for a web application. This stack contains:

* __Front:__ Generator that creates a web application based on React that uses:
  * [Routing](https://reacttraining.com/react-router/)
  * [Redux](https://redux.js.org/)
  * [Websockets](https://socket.io/)
  * [Material UI](https://material-ui.com/)
  * [GraphQL](https://graphql.org/)
* __Back:__ Generator that creates a backend based in [Node.js](https://nodejs.org/en/) that uses:
  * [Hapi](https://hapijs.com/)
  * [Websockets](https://socket.io/)
  * [GraphQL](https://graphql.org/)
  * Multiple databases handlers.
    * MongoDB
    * MySQL
    * PostgreSQL
* __[GraphiQL](https://github.com/graphql/graphiql):__ Generator that creates a web application to manage our backend based on GraphQL.
* __Catalog:__ Generator that creates a development environment to create a React component catalog.

## Installation

To install the tool:

```bash
npm install -g fullstack-cli
```

And to create a new project:

```bash
fullstack-cli
```

And follow the instructions on the screen.

## Technology

Fullstack-CLI uses a simple form structure that asks the user to configure the project throw a bunch of steps using [inquirer.js](https://github.com/SBoudrias/Inquirer.js/).

## Frontend

We are using [WebPack](https://webpack.github.io/) as a development environment, and NPM scripts to automatize the process.

After introducing the project name, the options that offer the creation wizard are:

* __Websockets:__ If you need WebSockets, install them selecting this option. This creates an connection using [socket-io-client](https://github.com/socketio/socket.io-client) in the `index.jsx` file and listen to connections from the WebSockets in the backend.

* __Material-UI:__ If you want to add a CSS framework to your project, I have chosen [Material-UI](http://www.material-ui.com). It is a great framework based on Google's Material Design and has a lot of great tools and components. Of course, you can omit this step and add your own styles or preferred framework ([Semantic UI React](https://react.semantic-ui.com/introduction) is another great framework to work with).

* __Redux:__ Here you can decide to install [Redux](https://redux.js.org/) in your application. Redux is an amazing tool that keeps your application state. It's hard to understand the data flow inside a modern web application without this kind of tools nowadays.

* __Routes:__ If you are going to make something complex with more that one page, this is your module. It uses [react-router](https://reacttraining.com/react-router/) to create a simple structure of a few routes behind a login. Be careful because we are using the fourth version, and it breaks totally from previous ones.

After this steps, we ask for basic information to create the `package.json` of the application.

Then, the packages are installed, and a few instructions appear to let you know how to start developing your new platform.

Not choosing any packages during the creation process, creates the simplest React application you can have, just to start building from scratch.

## Backend

The backend wizard starts more or less in the same way. It asks for the project's name.

After that, it follows this steps:

* __Databases:__ First of all, the wizard asks you which databases needs your back to connect to, in order to install the basic connector structure for each one. Right now, we offer connections for [MongoDB](https://www.mongodb.com/) (that also add a [GraphQL](http://graphql.org/) layer if needed), [MySQL](https://www.mysql.com/) and [PostgreSQL](https://www.postgresql.org/). You can install all of them if needed.

  * For MongoDB we are going to use [Mongoose](http://mongoosejs.com/) as ODM.
  * For MySQL we are going o use [mysqljs](https://github.com/mysqljs/mysql).
  * For PostgreSQL we are going o use [node-postgres](https://github.com/brianc/node-postgres).

* __Websockets:__ If you are going to use WebSockets, this option installs and configures a WebSocket endpoint using [Socket.io](https://socket.io/). It just listens for connections and ads a listener for `isAlive` message for testing purpose.

* __GraphQL:__ If you have selected MongoDB as the database, you can also configure an endpoint for [GraphQL](http://graphql.org/), and amazing database concept created by Facebook. The main idea is to allow the client to ask for the data needed instead of having thematic endpoints. This allows us to filter the info in the server, and send smaller packages with only the needed data.

Then, the packages are installed, and a few instructions appear to let you know how to start developing your new platform.

The chosen framework for the back is [Hapi](https://hapijs.com/) (using [Good](https://github.com/hapijs/good) as logger tool, in this case, only through the console).

The tool for the API description is [Swagger](https://swagger.io/) (using [hapi-swagger](https://github.com/glennjones/hapi-swagger)).

The security is based in [JWT](https://jwt.io/) (using [hapi-auth-bearer-token](https://github.com/johnbrett/hapi-auth-bearer-token)).

The project is based on plain Node.js (no transpilers), so we are still using CommonJS import method using `require` instead of `import`.

To configure each database connection, there are configuration files inside the __config__ folder. The API will try to connect to your databases, so if you don't configure the connection properly, it will throw an error.

## Catalog

The catalog creates an application based in [Styleguidist](https://github.com/styleguidist/react-styleguidist). This tool allows us to develop components isolated from our main application.

## Useful Links

[Semantic Release](https://github.com/semantic-release/semantic-release)
