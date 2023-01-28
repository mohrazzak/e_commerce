const express = require('express');
const { getUsers } = require('./userController');

const router = express.Router();

router.get('/', getUsers);

module.exports = router;
