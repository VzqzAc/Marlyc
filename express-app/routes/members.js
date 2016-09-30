const express = require('express');
var routes = express.Router();
const members = require('../controllers/Members');

router.route('/members')
  .get((req, res) => {
    members.index
  })
  .post((req, res) => {
    members.save(req, res)
  });

router.route('members/:id')
  .get((req, res) => {
    members.show(req, res)
  })
  .put((req, res) => {
    members.update(req, res)
  });

module.exports = router;
