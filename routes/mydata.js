var express = require('express');
var router = express.Router();

/* GET mydata. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Sumanth Reddy Nandyala' });
});

module.exports = router;
