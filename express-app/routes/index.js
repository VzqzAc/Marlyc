var express = require('express');
var router = express.Router();

module.exports = (app) => {
  var members = require('./members');
  // delete after test
  var membersController = require('../controllers/Members');
  app.get('/', (req, res) => {
    membersController.index(req, res);
    //res.render('index', {title: 'Express'});
  })
  app.use('/members', members);
};
