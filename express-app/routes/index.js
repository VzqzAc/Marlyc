var express = require('express');
var router = express.Router();

module.exports = (app) => {
  var members = require('./members');
  app.get('/', (req, res) => {
    //this is supposed to show dashboard once finished
    res.render('dashboard', {title: "Marlyc's dashboard"});
  })
  app.use('/members', members);
};
