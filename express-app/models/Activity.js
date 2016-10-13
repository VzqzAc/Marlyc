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

activitySchema.methods.all = () => {
  return this.find({}, (err, members) => {
                                return (err ? err : members);
                              });
                            };

//let Member = mongoose.model('Member', memberSchema);

module.exports = mongoose.model('Activity', activitySchema);
