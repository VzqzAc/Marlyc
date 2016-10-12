/*--- Controller ---*/
const BaseController = require('./Base');

/*--- Form to views ---*/
const Form = require('../views/members/_form'),
      member_form = Form.form,
      reg_form = Form.reg_form;

/*--- Database ---*/
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
  },
  new: (req, res) => {
    res.render('members/new', {title:'New member', content: member_form});
  },
  create: (req, res) => {
    console.log('entro a algo');
  }
});
