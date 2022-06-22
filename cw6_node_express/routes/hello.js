var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.redirect('/hello')
});

router.get('/hello', function(req, res, next) {
  res.render('hello', { title: 'Hello there', hello: "Hello world" });
});

router.get('/form', function(req, res, next) {
  res.render('form', { title: 'Form' });
});

router.get('/formdata', function (req, res, next) {
    const query = req.query
  res.render('formdata',
      {
        title: 'Form data',
         firstName: query.firstName,
         lastName: query.lastName,
         index: query.index
      });
});

module.exports = router;
