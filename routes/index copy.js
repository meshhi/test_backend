var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test', function(req, res, next) {
  res.send('respond with a resource test');
});

module.exports = router;
