// eslint-disable-next-line no-unused-vars
module.exports = (error, req, res, next) => {
  console.error(`\x1b[31m[Error] | \x1b[0m${error.message}`);
  const { message, statusCode, data } = error;
  res.status(statusCode).json({ message, data });
};
