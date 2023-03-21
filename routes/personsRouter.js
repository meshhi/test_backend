const express = require('express');
const router = express.Router();
const sequelize = require('../database/db-connection');

router.get('/get/all', async function(req, res, next) {
  const [results, metadata] = await sequelize.query("SELECT * FROM persons;");

  console.log(results);
  console.log(metadata);

  res.send('OK');
});


/* GET home page. */
router.get('/create', function(req, res, next) {
  res.send('/create/person');
});

router.get('/update', function(req, res, next) {
  res.send('/update/person');
});

router.get('/change', function(req, res, next) {
  res.send('/change/person');
});

module.exports = router;