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

activitySchema.methods.all = function() {
  return mongoose.model('Activity').find({});
                            };

module.exports = mongoose.model('Activity', activitySchema);
