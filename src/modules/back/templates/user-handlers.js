const { User } = require('../ddbb/models');

module.exports.getUsers = () => {
  return new Promise((resolve, reject) => {
    User.find({})
      .catch(error => reject(error))
      .then(users => resolve(users));
  });
};

module.exports.getUser = data => {
  const { id } = data;
  return new Promise((resolve, reject) => {
    User.findById(id)
      .catch(error => reject(error))
      .then(user => resolve(user));
  });
};

module.exports.postUser = data => {
  const { input } = data;
  const newUser = new User(input);
  return new Promise((resolve, reject) => {
    newUser.save()
      .catch(error => reject(error))
      .then(user => resolve(user));
  });
};

module.exports.putUser = data => {
  const { id, input } = data;
  return new Promise((resolve, reject) => {
    User.findByIdAndUpdate(id, input, { new: true })
      .catch(error => reject(error))
      .then(user => resolve(user));
  });
};

module.exports.deleteUser = data => {
  const { id } = data;
  return new Promise((resolve, reject) => {
    User.findByIdAndRemove(id)
      .catch(error => reject(error))
      .then(user => resolve(user));
  });
};
