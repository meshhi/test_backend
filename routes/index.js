var express = require('express');
var router = express.Router();
var testRouter = require('./index copy');
var sequelize = require('../database/db-connection');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    await sequelize.authenticate();
    res.send('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    res.send(error);
  }
});

router.use('/some', testRouter);

module.exports = router;
