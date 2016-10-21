const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);


var memberSchema = new Schema({
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
  observations: {type: String, default: ""},
  _activity: {
    _id: {
      type: Number,
      ref: 'Activity',
      required: true
    }
  },
  suspended: Boolean
});

memberSchema.methods.all = function({}, callback) {
  return mongoose.model('Member').find({}, (err, members) => {
    if(err) callback(err, "");
    else callback("", members);
  })
};

memberSchema.methods.createMember = function(params, callback) {
  Member = mongoose.model('Member');
  newMember = new Member(params);
  console.log('asdasdasd');
  return newMember.save((err, createdMember) => {
    console.log('queeee');
    if(err) callback(err, false, "");
    else callback("", true, createdMember);
  })
};

memberSchema.plugin(autoIncrement.plugin, {model: 'Member', startAt: 1});

module.exports = mongoose.model('Member', memberSchema);
