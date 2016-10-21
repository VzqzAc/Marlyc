/*--- Controller ---*/
const BaseController = require('./Base');


/*--- Database ---*/
let Member = new (require('../models/Member'));
let Activity = new (require('../models/Activity'));
const mongoose = require('mongoose');

/* helper vars */
let activities;
let members;

/*-- Controller methods extended from BaseController --*/
module.exports = BaseController.extend({
  name: 'Members',
  index: (req, res) => {
    Member.all({}, (err, allMembers) => {
      if(err) throw err;
      res.render('members/index', {title: 'Members', members: allMembers});
    });
  },
  show: (req, res) => {
    res.render('members/show', {title:'Show for member ' + req.params.id, members: 'looking at member #' + req.params.id});
  },
  new: (req, res) => {
    Activity.all({}, (err, allActivities) => {
      if(err) throw err;
      res.render('members/new', {title:'New member', activities: allActivities});
    });
  },
  create: (req, res) => {
    mongoose.model('Activity').findOne({name: req.body.activity}, '_id')
                              .exec()
                              .then((act) => {
                                req.body['_activity'] = {},
                                req.body._activity['_id'] = act._id;
                                req.body.inscriptionDate = new Date(req.body.inscriptionDate);
                                req.body.birthDate = new Date(req.body.birthDate);
                                console.log(req.body._activity)
                                console.log('anteds de create');
                                Member.createMember(req.body, (err, success, createdMember) => {
                                  if(err) {console.log('error!!!!' + err) ;throw err;}
                                  else if(success) res.redirect('/members/'+createdMember._id);
                                });
                              });
    //console.log(req.params);
    //Member.createMember(req.body)
  }
});
