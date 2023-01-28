require('dotenv').config();

const { DB_USERNAME, DB_PASSWORD, DB_DIALACT, DB_NAME, DB_HOST, DB_PORT } =
  process.env;

module.exports = Object.freeze({
  DB_USERNAME,
  DB_PASSWORD,
  DB_PORT,
  DB_DIALACT,
  DB_HOST,
  DB_NAME,
});
