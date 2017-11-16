const Mongoose = require('mongoose');

const userSchema = Mongoose.Schema({
  username: String,
  password: String
});

module.exports.User = Mongoose.model('user', userSchema);
