const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const { ApiError } = require('../../utils/errors');

module.exports = (req, res, next) => {
  try {
    const authHeader = req.get('Authorization');
    if (!authHeader)
      throw new ApiError('Not authorized.', StatusCodes.UNAUTHORIZED);
    const token = authHeader.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.TOKEN);
    if (!decodedToken)
      throw new ApiError('Unexpected token.', StatusCodes.UNAUTHORIZED);
    req.userId = decodedToken.id;
    return next();
  } catch (err) {
    return next(err);
  }
};
