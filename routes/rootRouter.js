const express = require('express');
const router = express.Router();
const personsRouter = require('./personsRouter');
const testsRouter = require('./testsRouter');

router.use('/persons', personsRouter);
router.use('/tests', testsRouter);

module.exports = router;
