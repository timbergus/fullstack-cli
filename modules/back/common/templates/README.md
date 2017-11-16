# {{ name }} Project

Everybody know how powerful are REST APIs when managing data between client and server. So I have made this template in order to implement a simple API using a few basic components like authentication and a database.

First of all, we need to write our services and for that we are going to use Hapi. It is a powerful framework with a lot of tool we can use, and a really simple file structure we can implement to have our code clean and simple. Then we will secure them using JWT and finally we will expose our API structure using Swagger. And to persist the data, we will use MongoDB with Mongoose.

## Components

###[Hapi](http://hapijs.com/)

Hapi is a backend framework that will allow us to create our API. To do that, we need to create our server using a configuration object to define __host__, __port__ and __cors__ in the main file of our API, a __routes.js__ file to define our services and a __handler.js__ file where we are going to define the functions which are going to respond to each service.

```json
{
  "host": "0.0.0.0",
  "port": "<port number>",
  "routes": {
    "cors": {
      "origin": ["*"]
    }
  }
}
```

With Hapi, we need to register the tool that are going to be used in our API. In this case, we are going to use:

#### [hapi-auth-bearer-token](https://github.com/johnbrett/hapi-auth-bearer-token)

This tool allows us to implement a authentication strategy based in the __Authorization__ header key. We just need to send in our petition header this key:

```json
{
  "Authorization": "Bearer <our super secure token>"
}
```

And it will be passed to:

```javascript
server.auth.strategy('simple', 'bearer-access-token', { validateFunc: validate });
```

__Validate__ function is a simple [JWT](https://jwt.io/) token validation. In case the token is OK, we grant access to the service. If not, we return a non authorize message from the server.

```javascript
module.exports.validate = function (token, callback) {
  jwt.verify(token, key, (error, decoded) => {
    if (error) {
      return callback(null, false);
    }
    return callback(null, true, decoded);
  });
};
```

#### [inert](https://github.com/hapijs/inert), [vision](https://github.com/hapijs/vision) and [hapi-swagger](https://github.com/glennjones/hapi-swagger)

These tools expose our API in `/documentation` path. All this information is defined between the main server file in `hapiSwaggerOptions` object and the __routes.js__ file. Just check the __config__ object inside each route to figure out how to do this. In order to check the parameters passed to the route we will use [Joi](https://github.com/hapijs/joi). If there is any error in the defined parameters, we will receive the error in our service call.

#### [good](https://github.com/hapijs/good)

This tool is going to be used to log our server activity where ever we need it.

###[MongoDB](https://www.mongodb.com/) and [Mongoose](http://mongoosejs.com/)

To persist our data we are going to use MongoDB. A very powerful document based database. And to simplify the task we are going to use an ODM called Mongoose.

We can follow this two simple steps to use Mongoose:

__First__ we need to create a file called __models.js__ where we are going to define our Mongoose models. Each model need a Mongoose schema defined as a simple object with keys and data types like this:

```javascript
const Mongoose = require("mongoose");

const demoSchema = Mongoose.Schema({
  username: String,
  password: String
});

module.exports.User = Mongoose.model('user', demoSchema);
```

__Second__ we are going to import the model every where we need to access the database. For example, if we need to create a new entry in the database, we can create a new model with a object with the new data and the save this model. This will create a new entry in the database with our data and an unique id. When creating a new model what we are really doing is filtering the data we pass with the schema that defines the model, and adding an unique identifier. The save write this new object to the database. For example, imagine you have this data object, using the previous model example:

```javascript
let newUserData = {
  username: 'fake_user',
  password: 'fake_password',
  age: 36
};
```

Creating a new object from the model returns:

```javascript
let newUser = new User(newUserData);
```

So if we see the `newUser` structure we will see:

```json
{
  "_id": "<unique id>",
  "username": "fake_user",
  "password": "fake_password"
}
```

And if we save it with `newUser.save()` we will have our new entry in the database.

### Tests

To test our API we will use two amazingly simple tools: [Tape](https://github.com/substack/tape) and [Nock](https://github.com/node-nock/nock). Tape will alow us to make unit testing, and Nock will fake our calls to the services.

To test we are going to use a simple file structure with a short script to launch all the tests, and to show them pretty in screen we will use __tap-spec__.

For the coverage, we will use [NYC](https://github.com/istanbuljs/nyc) that creates a nice site like output to show our test coverage.

The magic is inside the __test.js__ file. Using [glob](https://github.com/isaacs/node-glob) we are going to retrieve all the __\_test\___ folders inside our project and launch its __index.js__ files.
