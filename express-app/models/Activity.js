const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var activitySchema = new Schema({
  _id: Number,
  name: String,
  _members: [{
    _id: {
      type: Number,
      ref: 'Member'
    }
  }]
});

activitySchema.methods.all = function({}, callback) {
  return mongoose.model('Activity').find({}, function(error, activities) {
    console.log(activities);
    if(error) callback(error, "");
    else callback("", activities);
  });
};

//activitySchema.methods.findWithQuery = function(query, )

module.exports = mongoose.model('Activity', activitySchema);
