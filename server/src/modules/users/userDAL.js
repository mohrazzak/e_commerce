const User = require('./User');

module.exports = {
  async getAllUsers() {
    return User.findAll();
  },
};
