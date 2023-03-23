const express = require('express');
const router = express.Router();
const { sequelize, Person } = require('../database/models');

router.get('/get/all', async function(req, res, next) {
  // const [results, metadata] = await sequelize.query("SELECT * FROM People;");

  const persons = await Person.findAll();
  console.log(persons)
  res.status(201).send('OK');
});


/* GET home page. */
router.post('/create', async function(req, res, next) {
  try {
    await Person.create({
      person_name: req.body.person_name,
      person_datebirth: req.body.person_datebirth,
      person_age: Math.abs(new Date(new Date() - new Date(req.body.person_datebirth)).getUTCFullYear() - 1970),
      person_social_rate: req.body.person_social_rate,
    });
    res.status(201).send('/person/create || person created!');
  } catch (err) {
    console.log(err)
    res.status(500).send(err);
  }
});

router.get('/update', function(req, res, next) {
  res.send('/update/person');
});

router.get('/change', function(req, res, next) {
  res.send('/change/person');
});

module.exports = router;