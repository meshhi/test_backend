const createError = require('http-errors');
const express = require('express');
const router = express.Router();
const { sequelize } = require('../database/models');

router.get('/db-connection', async (req, res, next) => {
  try {
    await sequelize.authenticate();
    res.send('Connection has been established successfully.');
  } catch (error) {
    next(createError('Unable to connect to the database'));
  }
})

router.get('/sync-db', async (req, res, next) => {
  try {
    await sequelize.sync({ force: true });
    res.send("All models were synchronized successfully.");
  } catch (error) {
    next(createError('Unable to connect to the database'));
  }
})


module.exports = router;
