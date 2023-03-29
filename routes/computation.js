var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    var d1 = Math.floor(Math.random() * 10);
    var d2 = Math.floor(Math.random() * 02);
    var d3 = Math.floor(Math.random() * 10);
    var cosFunction = Math.cos(d1);
    var asinFunction = Math.asin(d2);
    var asinhFunction = Math.asinh(d3);
    res.render('computation',
                {
                    title: 'Sumanth Reddy Nandyala functions. ',
                    d1: d1,
                    d2: d2,
                    d3: d3,
                    cos: cosFunction,
                    asin: asinFunction,
                    asinh: asinhFunction
                });
});
module.exports = router;