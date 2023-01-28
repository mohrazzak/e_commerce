module.exports = (
  res = {},
  statusCode = 200,
  message = 'Operation done succesfully.',
  data = {}
) => res.status(statusCode).json({ message, data });
