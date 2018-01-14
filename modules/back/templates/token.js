// Boom formats the http messages for our endpoints responses.

const Boom = require('boom');

// This function removes "Bearer " and returns the token.

const { parseBearer } = require('../utils/headers');

// This functions are the

const { signToken, verifyToken } = require('../auth');

// This function just returns a message in the root url of the API to let us
// know it is working.

module.exports.ping = request => '<h1>API is Working!</h1>';

// This function creates a token and returns it.

module.exports.createToken = request => signToken(request.query.username);

// This function decodes a token and returns the result.

module.exports.decodeToken = request => verifyToken(parseBearer(request));
