const express = require('express');
var router = express.Router();
const members = require('../controllers/Members');

router.route('/')
  .get((req, res) => {
    members.index(req, res);
    console.log(req + '------' + res);
  })
  .post((req, res) => {
    members.create(req, res);
  });

router.route('/:id')
  .get((req, res) => {
    members.show(req, res);
  })
  .put((req, res) => {
    members.update(req, res);
  });

module.exports = router;
