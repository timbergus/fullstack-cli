# Fullstack CLI (FSC)

## Introduction

This is a Fullstack CLI to manage and create servers and SPAs, using  [inquirer.js](https://github.com/SBoudrias/Inquirer.js/) to ask questions to the user to configure the creation process.

To use it, just install it from [npm](https://www.npmjs.com/package/another-react-cli):

```bash
npm -g install fullstack-cli
```

And create a new project, just typing __fsc__ and answering a few questions.

Have fun :)

## Front

The environment created uses [WebPack](https://webpack.github.io/) to pack the application, and [npm](https://www.npmjs.com/)/[yarn](https://yarnpkg.com/en/) script to automatize the process.

The build process creates a __dist__ folder with the application, the vendor libraries, the styles and other bundles, result of dynamic importing (already set the tools and the linter rules).

We also add a tool to clean the __dist__ folder when building.

So right now, you can create a full application, and a single component. The options for the full application are:

*   Routes ([react-router](https://reacttraining.com/react-router/))
*   [Material UI](http://www.material-ui.com)
*   Websockets ([socket.io](https://socket.io/))
*   [Redux](https://github.com/reactjs/redux)

If you choose nothing, you have the simple app with an only file and an only component. If you choose all, you need to also create a back using [another-api-cli](https://www.npmjs.com/package/another-api-cli), to connect using websockets.

## Back

Create API projects using Node.js and Hapi, and using [inquirer.js](https://github.com/SBoudrias/Inquirer.js/) to ask questions to the user to configure the creation process.

All it's made using plain node without any kind of parser. So I'm still using `require` instead of `import`.

The new API, has the following capabilities:

*   Security layer using JWT.
*   REST API layer using Hapi and Swagger.
*   JWT endpoint to return a token.
*   JWT endpoint to decode a token.
*   GraphQL endpoint over MongoDB.
*   A module to connect to MongoDB.
*   A module to connect to MySQL.
*   A module to connect to PostgreSQL.
*   A module to open web sockets.

To configure the databases connections, install and run the databases you need, and use the configuration files inside the __config__ folder to define the connection parameters.

The API will try to connect to your database, so if you don't configure the connection properly, it will throw an error.
