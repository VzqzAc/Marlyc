/*--- Controller ---*/
const BaseController = require('./Base');


/*--- Database ---*/
let Member = require('../models/Member');
let Activity = require('../models/Activity');
const mongoose = require('mongoose');
// Member = mongoose.model('Member').schema;
// Activity = mongoose.model('Activity').schema;

/*-- DB calls --*/
let activities;
// let members = Member.methods.all();

/*-- Controller methods extended from BaseController --*/
module.exports = BaseController.extend({
  name: 'Members',
  index: (req, res) => {
    console.log(mem);
    res.render('members/index', {title: 'Members', members: 'a'});
  },
  show: (req, res) => {
    res.render('members/show', {title:'Show for member ' + req.params.id, members: 'looking at member #' + req.params.id});
  },
  new: (req, res) => {
    Activity.find({}, 'name', (err, allActivities) => {
      if(err) throw err;
      activities = allActivities;
    });
    res.render('members/new', {title:'New member', activities: activities});
  },
  create: (req, res) => {
    console.log('entro a algo');
  }
});
