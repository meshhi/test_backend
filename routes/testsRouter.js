const createError = require('http-errors');
const express = require('express');
const router = express.Router();
const sequelize = require('../database/db-connection');

router.get('/db-connection', async (req, res, next) => {
  try {
    await sequelize.authenticate();
    res.send('Connection has been established successfully.');
  } catch (error) {
    next(createError('Unable to connect to the database'));
  }
})

module.exports = router;
