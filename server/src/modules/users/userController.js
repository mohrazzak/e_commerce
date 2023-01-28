// const { userServices } = require('.');
const { ApiError } = require('../../utils/errors');
const responser = require('../../utils/responser');

exports.getUsers = async (req, res, next) => {
  try {
    responser(res, 200, undefined, { name: 'fuck' });
  } catch (err) {
    next(err);
  }
};
