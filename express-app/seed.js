const mongoose = require('mongoose');
const Member = require('./models/Member');
const Activity = require('./models/Activity');

mongoose.connect('mongodb://localhost:27017/marlyc', function(err, db){
  if(err){
    console.log('No mongodb server running');
    console.log(err);
  } else {
    let act = new Activity({
      _id: 1,
      name: 'Basketball'
    });
    act.save();
    console.log(act);
    act = new Activity({
      _id: 2,
      name: 'Natacion'
    });
    act.save();
    console.log(act);
  }
});

mongoose.connection.close();
