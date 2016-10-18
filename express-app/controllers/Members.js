/*--- Controller ---*/
const BaseController = require('./Base');


/*--- Database ---*/
const Member = new (require('../models/Member'));
const Activity = require('../models/Activity');

/*-- DB calls --*/
let members = Member.all();
let activities = Activity.all();

/*-- Controller methods extended from BaseController --*/
module.exports = BaseController.extend({
  name: 'Members',
  index: (req, res) => {
    res.render('members/index', {title: 'Members', members: members});
  },
  show: (req, res) => {
    res.render('members/show', {title:'Show for member ' + req.params.id, members: 'looking at member #' + req.params.id});
  },
  new: (req, res) => {
    console.log(activities);
    res.render('members/new', {title:'New member', activities: activities});
  },
  create: (req, res) => {
    console.log('entro a algo');
  }
});
