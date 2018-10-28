// This function removes "Bearer " from our header "authorization".

module.exports.parseBearer = function (request) {
  const { headers } = request;
  return headers.authorization ? headers.authorization.split('Bearer ').pop() : null;
};
