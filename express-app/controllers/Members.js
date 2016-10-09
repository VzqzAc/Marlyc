const BaseController = require('./Base'),
      View = require('../views/Base');

let Member = require('../models/Member');
Member = require('mongoose').model('Member').schema;

let members = Member.all;


var self = this;
module.exports = BaseController.extend({
  name: 'Members',
  index: (req, res) => {
    res.render('members/index', {title: 'members', members: members});
    console.log(members);
  },
  show: (req, res) => {
    res.render('members/show', {title:'Show for member ' + req.params.id, members: 'looking at member #' + req.params.id});
  }
});
