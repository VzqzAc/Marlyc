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

activitySchema.statics.all = function() {
  return this.model('Activity').find((err, activities) => {
                                console.log(activities);
                                return activities;
                              });
                            };

module.exports = mongoose.model('Activity', activitySchema);
