var express = require('express');
var router = express.Router();



module.exports = (app) => {
  var members = require('./members');
  app.use('/members', members);
};
