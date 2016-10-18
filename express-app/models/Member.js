const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var memberSchema = new Schema({
  _id: Number,
  name: String,
  address: String,
  phone: Number,
  credentialTypeID: String,
  credentialNumber: Number,
  requestNumber: Number,
  inscriptionDate: { type: Date, default: Date.now },
  birthDate: Date,
  birthPlace: String,
  ocupation: String,
  observations: String,
  _activity: {
    _id: {
      type: Number,
      ref: 'Activity',
      required: true
    }
  },
  suspended: Boolean
});

memberSchema.methods.all = function() {
  return this.model('Member').find({}, (err, members) => {
                                return (err ? err : members);
                              });
                            };

module.exports = mongoose.model('Member', memberSchema);
