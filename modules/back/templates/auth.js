// JSON web tokens creates tokens that can be self verified and configured.
// We will use the most basic library to keep things simple.

const jwt = require('jsonwebtoken');

// Here we configure the token's options. We can set the expiration time to
// invalidate tokens.

const options = {
  issuer: 'demo',
  expiresIn: '10m'
};

// And here we set our top secret key to encrypt the token.

const key = 'the demo secret key';

// This function verify the token for certain protected endpoints (auth
// strategy for the route).

module.exports.validateFunc = function (token, callback) {
  jwt.verify(token, key, (error, decoded) => {
    if (error) {
      return callback(null, false);
    }
    return callback(null, true, decoded);
  });
};

// This function generates a token adding extra data.

module.exports.signToken = function (username) {
  return new Promise((resolve, reject) => {
    jwt.sign({ username: username }, key, options, (error, token) => {
      if (error) {
        reject({ error: error.message });
      }
      resolve(token);
    });
  });
};

// This function verifies and decodes a token extracting its data.

module.exports.verifyToken = function (token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, key, (error, decoded) => {
      if (error) {
        reject({ error: error.message });
      }
      resolve(decoded);
    });
  });
};
